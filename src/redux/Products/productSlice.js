import { createSlice } from '@reduxjs/toolkit';
import {
  fetchProductsThunk,
  getCategoriesThunk,
  addProductsThunk,
  updateProductThunk,
  deleteProductThunk,
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
      })
      .addCase(updateProductThunk.fulfilled, (state, { payload }) => {
        const index = state.products.findIndex(
          (product) => product.id === payload.id
        );
        if (index !== -1) {
          state.products[index] = payload;
        }
      })
      .addCase(deleteProductThunk.fulfilled, (state, { payload }) => {
        const index = state.products.findIndex(
          (product) => product.id === payload
        );
        if (index !== -1) {
          state.products.splice(index, 1);
        }
      });
  },
});
export const productReducer = productSlice.reducer;
export const { selectProducts, selectFilterProducts, selectCategories } =
  productSlice.selectors;
export const { filterProducts } = productSlice.actions;
