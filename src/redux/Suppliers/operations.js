import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../config/adminConfig';
import { format } from 'date-fns';

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

export const getStatusThunk = createAsyncThunk(
  'suppliers/getStatus',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.get('suppliers/status');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addSuppliersThunk = createAsyncThunk(
  'suppliers/addSuppliers',
  async (suppliers, { rejectWithValue }) => {
    try {
      const { data } = await API.post('suppliers/add', suppliers);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const updateSuppliersThunk = createAsyncThunk(
  'suppliers/updateSuppliers',
  async (updatedSupplier, { rejectWithValue }) => {
    try {
      const supplierWithFormattedDate = {
        ...updatedSupplier,
        date: format(new Date(updatedSupplier.date), 'yyyy-MM-dd'),
      };
      const { data } = await API.put(
        `suppliers/update/${supplierWithFormattedDate._id}`,
        supplierWithFormattedDate
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteSuppliersThunk = createAsyncThunk(
  'suppliers/deleteSuppliers',
  async (id, { rejectWithValue }) => {
    try {
      await API.delete(`suppliers/remove/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
