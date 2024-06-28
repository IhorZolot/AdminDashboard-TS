import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../config/adminConfig';

export const fetchProductsThunk = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue, getState }) => {
    try {
      const page = getState().products.currentPage;
      const { data } = await API.get(`products?page=${page}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCategoriesThunk = createAsyncThunk(
  'products/getCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.get('products/categories');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addProductsThunk = createAsyncThunk(
  'products/addProduct',
  async (product, { rejectWithValue }) => {
    try {
      const { data } = await API.post('products/add', product);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const updateProductThunk = createAsyncThunk(
  'products/updateProduct',
  async ({_id, ...product}, { rejectWithValue }) => {
    try {
      console.log('Updating supplier with ID:', _id);
      console.log('Supplier data:', product);
      const { data } = await API.put(
        `products/update/${_id}`,
        product
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteProductThunk = createAsyncThunk(
  'products/deleteProduct',
  async (id, { rejectWithValue }) => {
    try {
      await API.delete(`products/remove/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const filteredProductsByFieldThunk = createAsyncThunk(
  'products/filteredProductsByField',
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await API.get(
        `products/filtered?filterField=name&filterValue=${value}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
