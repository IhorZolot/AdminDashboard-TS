import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../config/adminConfig';
import { ICustomer } from '@/types/customer.types';
import { RootState } from '../store';

interface ICustomersResponse {
  data: ICustomer[];
  pages: number;
}

export const fetchCustomersThunk = createAsyncThunk<
  ICustomersResponse,
  undefined,
  { rejectValue: string; state: RootState }
>('customers/fetchCustomers', async (_, { rejectWithValue, getState }) => {
  try {
    const page = getState().customers.currentPage;
    const { data } = await API.get(`customers?page=${page}`);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('An unexpected error occurred');
  }
});

export const filteredCustomersByFieldThunk = createAsyncThunk<
  ICustomersResponse,
  string,
  { rejectValue: string }
>('customers/filteredCustomersByField', async (value, { rejectWithValue }) => {
  try {
    const { data } = await API.get(
      `customers/filtered?filterField=name&filterValue=${value}`
    );
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('An unexpected error occurred');
  }
});
