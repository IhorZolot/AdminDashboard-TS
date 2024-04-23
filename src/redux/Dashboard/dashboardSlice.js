import { createSlice } from '@reduxjs/toolkit';
import { fetchDashboard } from './operations';

const initialState = {
  statisticVAlue: {
    productCount: 0,
    customerCount: 0,
    supplierCount: 0,
  },
  customerCountAll: [],
  incomeExpensesResult: [],
};
const dashboardSlice = createSlice({
  name: 'dashboard',
  selectors: {
    selectDashboard: (state) => state.statisticVAlue,
    selectCustomerCountAll: (state) => state.customerCountAll,
    selectIncomeExpensesResult: (state) => state.incomeExpensesResult,
  },
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDashboard.fulfilled, (state, { payload }) => {
      state.statisticVAlue.productCount = payload.productCount;
      state.statisticVAlue.customerCount = payload.customerCount;
      state.statisticVAlue.supplierCount = payload.supplierCount;
      state.customerCountAll = payload.customerCountAll;
      state.incomeExpensesResult = payload.incomeExpensesResult;
    });
  },
});
export const dashboardReducer = dashboardSlice.reducer;
export const {
  selectDashboard,
  selectCustomerCountAll,
  selectIncomeExpensesResult,
} = dashboardSlice.selectors;
