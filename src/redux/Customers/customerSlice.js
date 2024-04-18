import { createSlice } from '@reduxjs/toolkit';
import { fetchCustomers } from './operations';

const initialState = {
  customers: [],
};
const customerSlice = createSlice({
  name: 'customers',
  selectors: {
    selectCustomers: (state) => state.customers,
  },
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCustomers.fulfilled, (state, { payload }) => {
      state.customers = payload;
    });
  },
});
export const customerReducer = customerSlice.reducer;
export const { selectCustomers } = customerSlice.selectors;
