import type { IImage } from "./image";
import type { ITechnology } from "./technology";

export interface IInsight {
  id: number;
  documentId: string;
  title: string;
  description: string;
  image: IImage;
  technologies: ITechnology[];
  slug: string;
  insight_category: IInsightCategory;
  content: InsightContent;
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

export interface InsightContent {
  title: string;
  content: Content;
}

export interface Content {
  text: string;
  image: IImage;
}
