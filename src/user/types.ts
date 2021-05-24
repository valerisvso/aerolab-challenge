import {Product} from "../product/types";

export interface User {
  id: string;
  name: string;
  points: number;
  redeemHistory: Product[];
  createDate: string;
}

export interface HistoryItem {
  _id: string;
  name: string;
  category: string;
  img: {
    url: string;
    hdUrl: string;
  };
  cost: number;
  productId: string;
  createDate: string;
}
