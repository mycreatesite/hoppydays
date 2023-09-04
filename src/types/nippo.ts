export type Nippo = {
  id: string;
  date: string;
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