import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import homeReducer from "../../features/home/homeSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      home: homeReducer
    }
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;

export default store;
