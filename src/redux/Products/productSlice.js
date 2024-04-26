import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './operations';

const initialState = {
  products: [],
  filterProducts: '',
};
const productSlice = createSlice({
  name: 'products',
  initialState,
  selectors: {
    selectProducts: (state) => state.products,
    selectFilterProducts: (state) => state.filterProducts,
  },
  reducers: {
    filterProducts: (state, { payload }) => {
      state.filterProducts = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
    });
  },
});
export const productReducer = productSlice.reducer;
export const { selectProducts, selectFilterProducts } = productSlice.selectors;
export const { filterProducts } = productSlice.actions;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectFilterProducts],
  (products, filterProducts) => {
    if (!filterProducts.trim()) {
      return products;
    }
    return products.filter((product) =>
      product.name.toLowerCase().includes(filterProducts.toLowerCase())
    );
  }
);
