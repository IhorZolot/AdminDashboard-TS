import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchSuppliers } from './operations';

const initialState = {
  suppliers: [],
  filterSuppliers: '',
};
const supplierSlice = createSlice({
  name: 'suppliers',
  initialState,
  selectors: {
    selectSuppliers: (state) => state.suppliers,
    selectFilterSuppliers: (state) => state.filterSuppliers,
  },
  reducers: {
    filterSuppliers: (state, { payload }) => {
      state.filterSuppliers = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSuppliers.fulfilled, (state, { payload }) => {
      state.suppliers = payload;
    });
  },
});
export const supplierReducer = supplierSlice.reducer;
export const { selectSuppliers, selectFilterSuppliers } =
  supplierSlice.selectors;
export const { filterSuppliers } = supplierSlice.actions;

export const selectFilteredSuppliers = createSelector(
  [selectSuppliers, selectFilterSuppliers],
  (suppliers, filterSuppliers) => {
    if (!filterSuppliers.trim()) {
      return suppliers;
    }
    return suppliers.filter((supplier) =>
      supplier.name.toLowerCase().includes(filterSuppliers.toLowerCase())
    );
  }
);
