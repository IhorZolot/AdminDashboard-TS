import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
  fetchProductsThunk,
  getCategoriesThunk,
  addProductsThunk,
  updateProductThunk,
  deleteProductThunk,
  filteredProductsByFieldThunk,
} from './operations';

const initialState = {
  products: [],
  categories: [],
  pages: 0,
  currentPage: 1,
};
const productSlice = createSlice({
  name: 'products',
  initialState,
  selectors: {
    selectPages: (state) => state.pages,
    selectCurrentPage: (state) => state.currentPage,
    selectProducts: (state) => state.products,
    selectCategories: (state) => state.categories,
  },
  reducers: {
    currentPageProducts: (state, { payload }) => {
      state.currentPage = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsThunk.fulfilled, (state, { payload }) => {
        state.products = payload.data;
        state.pages = payload.pages;
      })
      .addCase(getCategoriesThunk.fulfilled, (state, { payload }) => {
        state.categories = payload;
      })
      .addCase(addProductsThunk.fulfilled, (state, { payload }) => {
        state.products.push(payload);
      })
      .addCase(updateProductThunk.fulfilled, (state, { payload }) => {
        const index = state.products.findIndex(
          (product) => product._id === payload._id
        );
        if (index !== -1) {
          state.products[index] = payload;
        }
      })
      .addCase(deleteProductThunk.fulfilled, (state, { payload }) => {
        const index = state.products.findIndex(
          (product) => product._id === payload
        );
        if (index !== -1) {
          state.products.splice(index, 1);
          toast.success('Product deleted successfully');
        }
      })
      .addCase(deleteProductThunk.rejected, (state, { payload }) => {
        toast.error(`Failed to delete product: ${payload}`);
      })
      .addCase(filteredProductsByFieldThunk.fulfilled, (state, { payload }) => {
        state.products = payload.data;
        state.pages = payload.pages;
      });
  },
});
export const productReducer = productSlice.reducer;
export const {
  selectProducts,
  selectCategories,
  selectPages,
  selectCurrentPage,
} = productSlice.selectors;
export const { currentPageProducts } = productSlice.actions;
