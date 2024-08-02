export interface IProduct {
  _id: string;
  name: string;
  suppliers: string;
  price: string;
  stock: string;
  photo?: string;
  category: string;
}

export type ICategories = string[];
