import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../config/adminConfig';

export const fetchSuppliersThunk = createAsyncThunk(
  'suppliers/fetchSuppliers',
  async (_, { rejectWithValue, getState }) => {
    try {
      const page = getState().suppliers.currentPage;
      const { data } = await API.get(`suppliers?page=${page}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const filteredSuppliersByFieldThunk = createAsyncThunk(
  'suppliers/filteredSuppliersByField',
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await API.get(
        `suppliers/filtered?filterField=name&filterValue=${value}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
