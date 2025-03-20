import type { IImage } from "./image";

interface IStack {
  id: number;
  name: string;
}

export interface IWorker {
  name: string;
  photo: IImage;
  description: string;
  position: string;
  experience: Date;
  stack: IStack[];
  vacancies: any;
  linkedIn: string;
  telegram: string;
  email: string;
}
