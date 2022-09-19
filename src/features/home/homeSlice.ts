import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppState } from "../../global/store/store";
import { Applications, HomeState, SortPayLoadType } from "./home.types";
import { disableAlert, enableAlert, fetchAllApps } from "./homeApi";

const initialState: HomeState = {
  apps: [],
  isloading: false,
  filterText: "",
  error: null,
  sortField: "",
  isSortedDescending: false
};

export const fetchAllApplications = createAsyncThunk("homeSlice/fetchApps", async () => {
  const response = await fetchAllApps();
  console.log("response : ", response);

  return { apps: response.data };
});

export const changeAppState = createAsyncThunk(
  "homeSlice/changeAppState",
  async ({ appid, alertState }: { appid: number; alertState: boolean }) => {
    if (alertState) {
      const response = await enableAlert(appid);
      console.log("response : ", response);
    } else {
      const response = await disableAlert(appid);
      console.log("response : ", response);
    }

    return { appid, alertState };
  }
);

export const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    sortByField: (state, action: PayloadAction<SortPayLoadType>) => {
      const { sortField, isSortedDescending } = action.payload;
      console.log("sortByField", sortField, "\nisSortedDescending : ", isSortedDescending);

      state.sortField = sortField;
      state.isSortedDescending = isSortedDescending;
    },
    searchByText(state, action: PayloadAction<string>) {
      const filterText = action.payload;
      state.filterText = filterText;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllApplications.pending, (state) => {
        state.isloading = true;
      })
      .addCase(fetchAllApplications.fulfilled, (state, action) => {
        const { apps } = action.payload;
        state.apps = apps;
        state.isloading = false;
      })
      .addCase(fetchAllApplications.rejected, (state, action) => {
        // state.apps = apps;
        console.log("action", action.payload);

        state.isloading = false;
      })
      .addCase(changeAppState.pending, (state) => {
        state.isloading = true;
      })
      .addCase(changeAppState.fulfilled, (state, action: PayloadAction<{ appid: number; alertState: boolean }>) => {
        const { appid, alertState } = action.payload;
        const app = state.apps.find((app) => app.appId === appid) as Applications;
        const idxNewApp = state.apps.indexOf(app);
        state.apps[idxNewApp].state = alertState;
        state.isloading = false;
      });
  }
});

export const selectAllApps = (state: AppState) => {
  const { filterText, sortField } = state.home;

  if (sortField && filterText) {
    return state.home.apps
      .filter((app: Applications) => app.name?.includes(filterText))
      .sort((a: any, b: any) => (a[sortField] > b[sortField] ? 1 : -1));
  }

  if (filterText) {
    return state.home.apps.filter((app: Applications) => app.name?.includes(filterText));
  }

  if (sortField) {
    const newApps = state.home.apps.slice();
    const isSortedDescending = state.home.isSortedDescending;
    return newApps.sort((a: any, b: any) =>
      (isSortedDescending ? a[sortField] < b[sortField] : a[sortField] > b[sortField]) ? 1 : -1
    );
  }

  return state.home.apps;
};

export const selectIsLoading = (state: AppState) => state.home.isloading;

export const { sortByField, searchByText } = homeSlice.actions;

export default homeSlice.reducer;
