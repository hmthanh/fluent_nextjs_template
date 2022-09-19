import { IColumn } from "@fluentui/react";

export interface IHomeProps {
  columns: IColumn[];
  items: any[];
}

export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}

export interface IDetailsListDocumentsState {
  columns: IColumn[];
  items: Applications[];
}

export interface ITableItems {
  id: number;
  key: string;
  name: string;
  state: boolean;
  products: string[];
  value: string;
}

export interface SortPayLoadType {
  sortField: string;
  isSortedDescending?: boolean;
}

export interface Product {
  id: number;
  name: string | null;
  desc: string | null;
}

export interface Applications {
  appId: number;
  key?: string | number;
  name?: string;
  state: boolean;
  products?: Product[];
  totalCluster?: number;
}

export interface HomeState {
  apps: Applications[];
  isloading: boolean;
  filterText: string;
  sortField: string;
  isSortedDescending?: boolean;
  error: string | null;
}
