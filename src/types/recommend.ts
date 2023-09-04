export type Recommend = {
  id: string;
  name: string;
  area: string;
  link: string;
  body: string;
  like?: number;
  image: {
    url?: string;
    height: number;
    width: number;
  };
};