import type { IStepListItem } from "./service";

export interface IWhyUs {
  id: number;
  documentId: string;
  items: IStepListItem[];
  createdAt: Date;
  updatedAt: Date;
}
