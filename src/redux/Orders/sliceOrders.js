import { createSlice } from '@reduxjs/toolkit';
import { fetchOrders } from './operations';

const initialState = {
  orders: [],
  filterValue: '',
};
const orderSlice = createSlice({
  name: 'orders',
  selectors: {
    selectOrders: (state) => state.orders,
    selectFilterValue: (state) => state.filterValue,
  },
  initialState,
  reducers: {
    filterOrders: (state, { payload }) => {
      state.filterValue = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.fulfilled, (state, { payload }) => {
      state.orders = payload;
    });
  },
});

export const orderReducer = orderSlice.reducer;
export const { selectOrders, selectFilterValue } = orderSlice.selectors;
export const { filterOrders } = orderSlice.actions;
