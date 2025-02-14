import type { IImage } from "./image";
import type { ITechnology } from "./technology";

export interface IInsight {
  id: number;
  documentId: string;
  title: string;
  description: string;
  image: IImage;
  technology: ITechnology[];
  slug: string;
  insight_category: IInsightCategory;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface IInsightCategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
}
