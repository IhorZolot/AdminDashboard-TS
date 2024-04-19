import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../config/adminConfig';

export const fetchProducts = createAsyncThunk(
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
