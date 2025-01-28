import type { IImage } from "./image";
import type { IService } from "./service";
import type { ITechnology } from "./technology";

export interface IProject {
  id: number;
  documentId: string;
  slug: string;
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

export interface IProjectInfo {
  description: string;
  tracking: Record<string, number>;
  stack: { name: string }[];
  challenge: IProjectChallenge;
}

export interface IProjectChallenge {
  title: string;
  subTitle: string;
  description: string;
}

export interface IProjectWithInfo extends IProject {
  project_info: IProjectInfo;
}
