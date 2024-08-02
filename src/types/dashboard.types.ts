interface ICustomerDashboard {
  _id?: string;
  name: string;
  email: string;
  spent: string;
  country: string;
}
interface IIncomeExpense {
  _id?: string;
  amount: number;
  name: string;
  type: 'income' | 'expense';
}

export interface IDashboardState {
  productCount: number;
  customerCount: number;
  supplierCount: number;
  customerCountAll: ICustomerDashboard[];
  incomeExpensesResult: IIncomeExpense[];
}
