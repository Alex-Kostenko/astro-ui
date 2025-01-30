import type { IImage } from "./image";
import type { IWorker } from "./worker";

interface ISkill {
  id: number;
  name: string;
}

export interface IList {
  id: number;
  title: string;
  items: IListItem[];
}

interface IListItem {
  id: number;
  text: string;
}

export interface ISchedule {
  id: number;
  type: string;
}

export interface IVacancy {
  title: string;
  image: IImage;
  slug: string;
  skills: ISkill[];
  workType: ISchedule[];
}

export interface IVacancyInfo {
  description: IList[];
  recruiter: IWorker;
}

export type IVacancyWithInfo = IVacancy & IVacancyInfo;
