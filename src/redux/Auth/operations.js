import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../config/adminConfig';

export const signupThunk = createAsyncThunk(
  'auth/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await API.post('/signup', credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
