export enum UploadPath {
  base = "",
  document = "document",
  images = "images",
}

export interface IUploadBody {
  path: UploadPath;
  field?: string;
  files: File | File[];
}
