import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchOrders } from './operations';

const initialState = {
  orders: [],
  filterValue: '',
};
const orderSlice = createSlice({
  name: 'orders',
  initialState,
  selectors: {
    selectOrders: (state) => state.orders,
    selectFilterValue: (state) => state.filterValue,
  },
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

export const selectFilteredOrders = createSelector(
  [selectOrders, selectFilterValue],
  (orders, filterValue) => {
    if (!filterValue.trim()) {
      return orders;
    }
    return orders.filter((order) =>
      order.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
);
