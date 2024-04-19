import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './operations';

const initialState = {
  products: [],
};
const productSlice = createSlice({
  name: 'products',
  selectors: {
    selectProducts: (state) => state.products,
  },
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
    });
  },
});
export const productReducer = productSlice.reducer;
export const { selectProducts } = productSlice.selectors;
