import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../config/adminConfig';

export const fetchSuppliers = createAsyncThunk(
  'suppliers/fetchSuppliers',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.get('suppliers');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
