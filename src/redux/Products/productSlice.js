import { createSlice } from '@reduxjs/toolkit';
import {
  fetchProductsThunk,
  getCategoriesThunk,
  addProductsThunk,
} from './operations';

const initialState = {
  products: [],
  filterProducts: '',
  categories: [],
};
const productSlice = createSlice({
  name: 'products',
  initialState,
  selectors: {
    selectProducts: (state) => state.products,
    selectFilterProducts: (state) => state.filterProducts,
    selectCategories: (state) => state.categories,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsThunk.fulfilled, (state, { payload }) => {
        state.products = payload;
      })
      .addCase(getCategoriesThunk.fulfilled, (state, { payload }) => {
        state.categories = payload;
      })
      .addCase(addProductsThunk.fulfilled, (state, { payload }) => {
        state.products.push(payload);
      });
  },
});
export const productReducer = productSlice.reducer;
export const { selectProducts, selectFilterProducts, selectCategories } =
  productSlice.selectors;
export const { filterProducts } = productSlice.actions;
