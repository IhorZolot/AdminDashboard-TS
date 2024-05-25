import { createSlice } from '@reduxjs/toolkit';
import {
  fetchSuppliersThunk,
  filteredSuppliersByFieldThunk,
} from './operations';

const initialState = {
  suppliers: [],
  pages: 1,
  currentPage: 1,
};
const supplierSlice = createSlice({
  name: 'suppliers',
  initialState,
  selectors: {
    selectSuppliers: (state) => state.suppliers,
    selectSuppliersPages: (state) => state.pages,
    selectCurrentSuppliersPage: (state) => state.currentPage,
  },
  reducers: {
    currentPageSuppliers: (state, { payload }) => {
      state.currentPage = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSuppliersThunk.fulfilled, (state, { payload }) => {
        state.suppliers = payload.data;
      })
      .addCase(
        filteredSuppliersByFieldThunk.fulfilled,
        (state, { payload }) => {
          state.suppliers = payload;
        }
      );
  },
});
export const supplierReducer = supplierSlice.reducer;
export const {
  selectSuppliers,
  selectSuppliersPages,
  selectCurrentSuppliersPage,
} = supplierSlice.selectors;
export const { currentPageSuppliers } = supplierSlice.actions;
