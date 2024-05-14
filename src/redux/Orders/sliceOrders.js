import { createSlice } from '@reduxjs/toolkit';
import { fetchOrdersThunk, fetchOrdersByFieldThunk } from './operations';

const initialState = {
  orders: [],
  filterValue: '',
  pages: 0,
  currentPage: 1,
};
const orderSlice = createSlice({
  name: 'orders',
  initialState,
  selectors: {
    selectPages: (state) => state.pages,
    selectCurrentPage: (state) => state.currentPage,
    selectOrders: (state) => state.orders,
    selectFilterValue: (state) => state.filterValue,
  },
  reducers: {
    currentPageOrders: (state, { payload }) => {
      state.currentPage = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrdersThunk.fulfilled, (state, { payload }) => {
        state.orders = payload.data;
        state.pages = payload.pages;
      })
      .addCase(fetchOrdersByFieldThunk.fulfilled, (state, { payload }) => {
        state.orders = payload;
      });
  },
});

export const orderReducer = orderSlice.reducer;
export const {
  selectOrders,
  selectFilterValue,
  selectPages,
  selectCurrentPage,
} = orderSlice.selectors;
export const { filterOrders, currentPageOrders } = orderSlice.actions;
