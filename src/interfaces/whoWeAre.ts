import type { IList, IListItemWithTitle, IListItemWithYear } from "./list";

export interface IWhoWeAre {
  id: number;
  documentId: string;
  services: IList<IListItemWithTitle>;
  story: IList<IListItemWithYear>;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
