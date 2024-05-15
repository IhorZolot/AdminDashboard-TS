import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../config/adminConfig';

export const fetchProductsThunk = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.get('products');
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
