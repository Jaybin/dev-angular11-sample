export interface IColumns {
  [key: string]: ITableColumn;
}

export interface ITypes {
  [key: string]: string;
}

export interface IListItem {
  id: string;
  Description: string;
  Date: string;
  Type?: string;
  Title?: string
}

export interface ITableColumn {
  key: string;
  label: string;
  type: string;
}