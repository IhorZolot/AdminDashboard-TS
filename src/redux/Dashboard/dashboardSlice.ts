import { createSlice } from '@reduxjs/toolkit';
import { fetchDashboard } from './operations';
import { IDashboardState } from '@/types/dashboard.types';

const initialState: IDashboardState = {
  productCount: 0,
  customerCount: 0,
  supplierCount: 0,
  customerCountAll: [],
  incomeExpensesResult: [],
};
const dashboardSlice = createSlice({
  name: 'dashboard',
  reducers: {},
  selectors: {
    selectProductCount: (state) => state.productCount,
    selectCustomerCount: (state) => state.customerCount,
    selectSupplierCount: (state) => state.supplierCount,
    selectCustomerCountAll: (state) => state.customerCountAll,
    selectIncomeExpensesResult: (state) => state.incomeExpensesResult,
  },
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDashboard.fulfilled, (state, { payload }) => {
      state.productCount = payload.productCount;
      state.customerCount = payload.customerCount;
      state.supplierCount = payload.supplierCount;
      state.customerCountAll = payload.customerCountAll;
      state.incomeExpensesResult = payload.incomeExpensesResult;
    });
  },
});
export const dashboardReducer = dashboardSlice.reducer;
export const {
  selectProductCount,
  selectCustomerCount,
  selectSupplierCount,
  selectCustomerCountAll,
  selectIncomeExpensesResult,
} = dashboardSlice.selectors;
