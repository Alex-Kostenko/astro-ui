export interface IListWithTitle<T = IListItem> {
  id: number;
  title: string;
  items: T[];
}

export interface IList<T = IListItem> {
  id: number;
  items: T[];
}

export interface ListWithSubTitle<T = IListItem> {
  id: number;
  title: string;
  subTitle: string;
  items: T[];
}

export interface IListItem {
  id: number;
  text: string;
}

export interface IListItemWithTitle {
  title: string;
  text: string;
}

export interface IListItemWithYear {
  title: string;
  text: string;
  year: number;
}
