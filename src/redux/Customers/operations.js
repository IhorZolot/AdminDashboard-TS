import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../config/adminConfig';

export const fetchCustomersThunk = createAsyncThunk(
  'customers/fetchCustomers',
  async (_, { rejectWithValue, getState }) => {
    try {
      const page = getState().customers.currentPage;
      const { data } = await API.get(`customers?page=${page}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const filteredCustomersByFieldThunk = createAsyncThunk(
  'customers/filteredCustomersByField',
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await API.get(
        `customers/filtered?filterField=name&filterValue=${value}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
