import type { IWorker } from "./worker";

interface ISkill {
  id: number;
  name: string;
}

interface IList {
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
  skills: ISkill[];
}

export interface IVacancyInfo {
  description: IList[];
  schedule: ISchedule[];
  recruiter: IWorker;
}

export type IVacancyWithInfo = IVacancy & IVacancyInfo;
