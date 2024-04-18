import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../config/adminConfig';

export const fetchCustomers = createAsyncThunk(
  'customers/fetchCustomers',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.get('customers');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
