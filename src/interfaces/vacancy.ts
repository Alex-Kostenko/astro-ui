import type { IImage } from "./image";
import type { IListWithTitle } from "./list";
import type { IWorker } from "./worker";

interface ISkill {
  id: number;
  name: string;
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
  description: IListWithTitle[];
  recruiter: IWorker;
}

export type IVacancyWithInfo = IVacancy & IVacancyInfo;
