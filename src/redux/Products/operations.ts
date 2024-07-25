import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../config/adminConfig';
import { RootState } from '../store';
import { ICategories, IProduct } from '@/types/product.types';
interface IProductsResponse {
  data: IProduct[];
  pages: number;
}

export const fetchProductsThunk = createAsyncThunk<
  IProductsResponse,
  undefined,
  { rejectValue: string; state: RootState }
>('products/fetchProducts', async (_, { rejectWithValue, getState }) => {
  try {
    const page = getState().products.currentPage;
    const { data } = await API.get(`products?page=${page}`);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('An unexpected error occurred');
  }
});

export const getCategoriesThunk = createAsyncThunk<
  ICategories,
  undefined,
  { rejectValue: string }
>('products/getCategories', async (_, { rejectWithValue }) => {
  try {
    const { data } = await API.get('products/categories');
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('An unexpected error occurred');
  }
});
export const addProductsThunk = createAsyncThunk<
  IProduct,
  IProduct,
  { rejectValue: string }
>('products/addProduct', async (product, { rejectWithValue }) => {
  try {
    const { data } = await API.post('products/add', product);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('An unexpected error occurred');
  }
});
export const updateProductThunk = createAsyncThunk<
  IProduct,
  IProduct,
  { rejectValue: string }
>(
  'products/updateProduct',
  async ({ _id, ...product }, { rejectWithValue }) => {
    try {
      const { data } = await API.put(`products/update/${_id}`, product);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unexpected error occurred');
    }
  }
);
export const deleteProductThunk = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('products/deleteProduct', async (id, { rejectWithValue }) => {
  try {
    await API.delete(`products/remove/${id}`);
    return id;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('An unexpected error occurred');
  }
});
export const filteredProductsByFieldThunk = createAsyncThunk<
  IProductsResponse,
  string,
  { rejectValue: string }
>('products/filteredProductsByField', async (value, { rejectWithValue }) => {
  try {
    const { data } = await API.get(
      `products/filtered?filterField=name&filterValue=${value}`
    );
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('An unexpected error occurred');
  }
});
