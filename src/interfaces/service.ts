import type { IImage, ListWithSubTitle } from ".";

export interface IService {
  id: number;
  documentId: string;
  slug: string;
  name: string;

  description: string;
  features: ListWithSubTitle;
  steps: IStepList;
  casesTitle: string;
  preview: IImage;

  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface IStepList {
  title: string;
  subTitle: string;
  items: IStepListItem[];
}
export interface IStepListItem {
  id: number;
  image: IImage;
  title: string;
  description: string;
}
