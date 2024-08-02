import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../config/adminConfig';
import { IDashboardState } from '@/types/dashboard.types';

export const fetchDashboard = createAsyncThunk<
  IDashboardState,
  undefined,
  { rejectValue: string }
>('dashboard/fetchDashboard', async (_, { rejectWithValue }) => {
  try {
    const { data } = await API.get('dashboard');
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('An unexpected error occurred');
  }
});
