import { createSlice } from '@reduxjs/toolkit';
import {
  addSuppliersThunk,
  fetchSuppliersThunk,
  filteredSuppliersByFieldThunk,
  getStatusThunk,
  updateSuppliersThunk,
} from './operations';

const initialState = {
  suppliers: [],
  pages: 0,
  currentPage: 1,
  status: [],
};
const supplierSlice = createSlice({
  name: 'suppliers',
  initialState,
  selectors: {
    selectSuppliers: (state) => state.suppliers,
    selectSuppliersPages: (state) => state.pages,
    selectCurrentSuppliersPage: (state) => state.currentPage,
    selectStatus: (state) => state.status,
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
        state.pages = payload.pages;
      })
      .addCase(
        filteredSuppliersByFieldThunk.fulfilled,
        (state, { payload }) => {
          state.suppliers = payload.data;
          state.pages = payload.pages;
        }
      )
      .addCase(getStatusThunk.fulfilled, (state, { payload }) => {
        state.status = payload;
      })
      .addCase(addSuppliersThunk.fulfilled, (state, { payload }) => {
        state.suppliers.push(payload);
      })
      .addCase(updateSuppliersThunk.fulfilled, (state, { payload }) => {
        const index = state.suppliers.findIndex(
          (supplier) => supplier._id === payload._id
        );
        if (index !== -1) {
          state.suppliers[index] = payload;
        }
      });
  },
});
export const supplierReducer = supplierSlice.reducer;
export const {
  selectSuppliers,
  selectSuppliersPages,
  selectCurrentSuppliersPage,
  selectStatus,
} = supplierSlice.selectors;
export const { currentPageSuppliers } = supplierSlice.actions;
