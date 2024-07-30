interface IStatisticValue {
  productCount: number;
  customerCount: number;
  supplierCount: number;
}
export interface IDashboardState {
  statisticVAlue: IStatisticValue;
  customerCountAll: [];
  incomeExpensesResult: [];
}
