import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../config/adminConfig';

export const fetchOrdersThunk = createAsyncThunk(
  'orders/fetchOrders',
  async (_, { rejectWithValue, getState }) => {
    try {
      const page = getState().orders.currentPage;
      const { data } = await API.get(`orders?page=${page}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchOrdersByFieldThunk = createAsyncThunk(
  'orders/fetchOrdersByField',
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await API.get(
        `orders/filtered?filterField=name&filterValue=${value}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
