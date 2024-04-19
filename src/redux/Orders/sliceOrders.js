import { createSlice } from '@reduxjs/toolkit';
import { fetchOrders } from './operations';

const initialState = {
  orders: [],
};
const orderSlice = createSlice({
  name: 'orders',
  selectors: {
    selectOrders: (state) => state.orders,
  },
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.fulfilled, (state, { payload }) => {
      state.orders = payload;
    });
  },
});

export const orderReducer = orderSlice.reducer;
export const { selectOrders } = orderSlice.selectors;
