export type Nippo = {
  id: string;
  date: string;
  publishedAt: string;
  updatedAt: string;
  title: string;
  name: string;
  body: string;
  like?: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
};