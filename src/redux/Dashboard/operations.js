import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../config/adminConfig';

export const fetchDashboard = createAsyncThunk(
  'dashboard/fetchDashboard',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.get('dashboard');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
