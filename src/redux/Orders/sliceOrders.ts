import { createSlice } from '@reduxjs/toolkit';
import { fetchOrdersThunk, fetchOrdersByFieldThunk } from './operations';
import { IOrder } from '@/types/order.types';

interface IOrderSlice {
  orders: IOrder[];
  pages: number;
  currentPage: number;
}

const initialState: IOrderSlice = {
  orders: [],
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
        state.orders = payload.data;
        state.pages = payload.pages;
      });
  },
});

export const orderReducer = orderSlice.reducer;
export const { selectOrders, selectPages, selectCurrentPage } =
  orderSlice.selectors;
export const { currentPageOrders } = orderSlice.actions;
