import { createSlice } from '@reduxjs/toolkit';
import { fetchSuppliers } from './operations';

const initialState = {
  suppliers: [],
};
const supplierSlice = createSlice({
  name: 'suppliers',
  initialState,
  selectors: {
    selectSuppliers: (state) => state.suppliers,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSuppliers.fulfilled, (state, { payload }) => {
      state.suppliers = payload;
    });
  },
});
export const supplierReducer = supplierSlice.reducer;
export const { selectSuppliers } = supplierSlice.selectors;
