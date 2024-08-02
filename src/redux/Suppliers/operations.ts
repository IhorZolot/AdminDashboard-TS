import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../config/adminConfig';
import { format } from 'date-fns';
import { ISupplier, ISupplierStatus } from '@/types/supplier.types';
import { RootState } from '../store';
interface ISuppliersResponse {
  data: ISupplier[];
  pages: number;
}
export const fetchSuppliersThunk = createAsyncThunk<
  ISuppliersResponse,
  undefined,
  { rejectValue: string; state: RootState }
>('suppliers/fetchSuppliers', async (_, { rejectWithValue, getState }) => {
  try {
    const page = getState().suppliers.currentPage;
    const { data } = await API.get(`suppliers?page=${page}`);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('An unexpected error occurred');
  }
});

export const filteredSuppliersByFieldThunk = createAsyncThunk<
  ISuppliersResponse,
  string,
  { rejectValue: string }
>('suppliers/filteredSuppliersByField', async (value, { rejectWithValue }) => {
  try {
    const { data } = await API.get(
      `suppliers/filtered?filterField=name&filterValue=${value}`
    );
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('An unexpected error occurred');
  }
});

export const getStatusThunk = createAsyncThunk<
  ISupplierStatus,
  undefined,
  { rejectValue: string }
>('suppliers/getStatus', async (_, { rejectWithValue }) => {
  try {
    const { data } = await API.get('suppliers/status');
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('An unexpected error occurred');
  }
});
export const addSuppliersThunk = createAsyncThunk<
  ISupplier,
  ISupplier,
  { rejectValue: string }
>('suppliers/addSuppliers', async (suppliers, { rejectWithValue }) => {
  try {
    const { data } = await API.post('suppliers/add', suppliers);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('An unexpected error occurred');
  }
});
export const updateSuppliersThunk = createAsyncThunk<
  ISupplier,
  ISupplier,
  { rejectValue: string }
>(
  'suppliers/updateSuppliers',
  async ({ _id, ...suppliers }, { rejectWithValue }) => {
    try {
      const supplierWithFormattedDate = {
        ...suppliers,
        date: format(new Date(suppliers.date), 'yyyy-MM-dd'),
      };
      console.log('Updating supplier with ID:', _id);
      console.log('Supplier data:', supplierWithFormattedDate);
      const { data } = await API.put(
        `suppliers/update/${_id}`,
        supplierWithFormattedDate
      );
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unexpected error occurred');
    }
  }
);
export const deleteSuppliersThunk = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('suppliers/deleteSuppliers', async (id, { rejectWithValue }) => {
  try {
    await API.delete(`suppliers/remove/${id}`);
    return id;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('An unexpected error occurred');
  }
});
