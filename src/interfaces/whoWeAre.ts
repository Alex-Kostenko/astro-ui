import type { IImage } from './image';
import type { IList, IListItemWithTitle, IListItemWithYear } from './list';

export interface IWhoWeAre {
  id: number;
  documentId: string;
  services: IList<IListItemWithTitle>;
  story: IList<IListItemWithYear>;
  values: IValue[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface IValue {
  id: number;
  title: string;
  description: string;
  image?: IImage;
}
