export interface IWhoWeAre {
  id: number;
  documentId: string;
  list: {
    items: {
      title: string;
      text: string;
    }[];
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
