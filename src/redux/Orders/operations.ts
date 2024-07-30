import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../config/adminConfig';
import { RootState } from '../store';
import { IOrder } from '@/types/order.types';

interface IOrderResponse {
  data: IOrder[];
  pages: number;
}

export const fetchOrdersThunk = createAsyncThunk<
  IOrderResponse,
  undefined,
  { rejectValue: string; state: RootState }
>('orders/fetchOrders', async (_, { rejectWithValue, getState }) => {
  try {
    const page = getState().orders.currentPage;
    const { data } = await API.get(`orders?page=${page}`);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('An unexpected error occurred');
  }
});

export const fetchOrdersByFieldThunk = createAsyncThunk<
  IOrderResponse,
  string,
  { rejectValue: string }
>('orders/fetchOrdersByField', async (value, { rejectWithValue }) => {
  try {
    const { data } = await API.get(
      `orders/filtered?filterField=name&filterValue=${value}`
    );
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('An unexpected error occurred');
  }
});
