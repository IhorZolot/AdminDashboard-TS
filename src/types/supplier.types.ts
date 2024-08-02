export interface ISupplier {
  _id?: string;
  name: string;
  address: string;
  suppliers: string;
  date: Date;
  amount: string;
  status: string;
}

export type ISupplierStatus = string[];
