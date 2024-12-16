import type { IImage } from "./image";
import type { IService } from "./service";
import type { ITechnology } from "./technology";

export interface IProject {
  id: number;
  documentId: string;
  title: string;
  subTitle: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  region: string;
  industry: string;
  clientSinceYear: string;
  image: IImage;
  technologies: ITechnology[];
  services: IService[];
}
