export interface Product {
  id: string;
  name: string;
  cost: number;
  category: string;
  img: string;
}

export interface RawProduct {
  _id: string;
  name: string;
  cost: number;
  category: string;
  img: {
    url: string;
    hdUrl: string;
  };
}
