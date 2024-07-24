import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, removeToken, setToken } from '../../config/adminConfig';
import { RootState } from '../store';

export interface IUser {
  name: string;
  email: string;
  password: string;
  token: string;
}
export interface ICredentials {
  email: string;
  password: string;
}
export interface IRefreshUser {
  name: string;
  email: string;
}

export const signupThunk = createAsyncThunk<
  IUser,
  ICredentials,
  { rejectValue: string }
>('auth/signup', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await API.post('user/signup', credentials);
    setToken(data.token);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('An unexpected error occurred');
  }
});
export const loginThunk = createAsyncThunk<
  IUser,
  ICredentials,
  { rejectValue: string }
>('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await API.post('user/login', credentials);
    setToken(data.token);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('An unexpected error occurred');
  }
});

export const logoutThunk = createAsyncThunk<
  undefined,
  undefined,
  { rejectValue: string }
>('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await API.post('user/logout');
    removeToken();
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('An unexpected error occurred');
  }
});
export const refreshThunk = createAsyncThunk<
  IRefreshUser,
  undefined,
  { rejectValue: string; state: RootState }
>('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }
  try {
    setToken(persistedToken);
    const { data } = await API.get('user/user-info');
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue('An unexpected error occurred');
  }
});
