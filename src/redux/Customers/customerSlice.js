import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchCustomers } from './operations';

const initialState = {
  customers: [],
  filterCustomers: '',
};
const customerSlice = createSlice({
  name: 'customers',
  initialState,
  selectors: {
    selectCustomers: (state) => state.customers,
    selectFilterCustomers: (state) => state.filterCustomers,
  },
  reducers: {
    filterCustomers: (state, { payload }) => {
      state.filterCustomers = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCustomers.fulfilled, (state, { payload }) => {
      state.customers = payload;
    });
  },
});
export const customerReducer = customerSlice.reducer;
export const { selectCustomers, selectFilterCustomers } =
  customerSlice.selectors;
export const { filterCustomers } = customerSlice.actions;

export const selectFilteredCustomers = createSelector(
  [selectCustomers, selectFilterCustomers],
  (customers, filterCustomers) => {
    if (!filterCustomers.trim()) {
      return customers;
    }
    return customers.filter((customer) =>
      customer.name.toLowerCase().includes(filterCustomers.toLowerCase())
    );
  }
);
