import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../config/adminConfig';

export const fetchOrders = createAsyncThunk(
  'orders/fetchOrders',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.get('orders');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
