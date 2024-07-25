import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCustomersThunk,
  filteredCustomersByFieldThunk,
} from './operations';

const initialState = {
  customers: [],
  pages: 0,
  currentPage: 1,
};
const customerSlice = createSlice({
  name: 'customers',
  initialState,
  selectors: {
    selectCustomers: (state) => state.customers,
    selectCustomersPage: (state) => state.pages,
    selectCurrentCustomersPage: (state) => state.currentPage,
  },
  reducers: {
    currentPageCustomers: (state, { payload }) => {
      state.currentPage = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomersThunk.fulfilled, (state, { payload }) => {
        state.customers = payload.data;
        state.pages = payload.pages;
      })
      .addCase(
        filteredCustomersByFieldThunk.fulfilled,
        (state, { payload }) => {
          state.customers = payload.data;
          state.pages = payload.pages;
        }
      );
  },
});
export const customerReducer = customerSlice.reducer;
export const {
  selectCustomers,
  selectCustomersPage,
  selectCurrentCustomersPage,
} = customerSlice.selectors;
export const { currentPageCustomers } = customerSlice.actions;
