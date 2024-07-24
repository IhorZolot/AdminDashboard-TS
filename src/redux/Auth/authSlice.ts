import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  signupThunk,
} from './operations';

export interface IUserSlice {
  name: string;
  email: string;
}
export interface IAuthState {
  user: IUserSlice;
  token: string;
  error: string | null;
  isLoading: boolean;
  isLoggedIn: boolean;
  isRefresh: boolean;
}

const initialState: IAuthState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  error: '',
  isLoading: false,
  isLoggedIn: false,
  isRefresh: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  selectors: {
    selectToken: (state) => state.token,
    selectUser: (state) => state.user,
    selectIsLoggedIn: (state) => state.isLoggedIn,
    selectIsRefresh: (state) => state.isRefresh,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupThunk.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.token = payload.token;
        state.isLoggedIn = false;
        state.error = '';
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user.email = payload.email;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.error = '';
      })
      .addCase(loginThunk.rejected, () => {
        toast.error('Incorrect email or password');
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.error = '';
        state.user.email = '';
        state.token = '';
        state.isLoggedIn = false;
        toast.success('Logout successful!');
      })
      .addCase(refreshThunk.pending, (state) => {
        state.isRefresh = true;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.isLoggedIn = true;
        state.isRefresh = false;
        state.error = '';
      })
      .addCase(refreshThunk.rejected, (state, { payload }) => {
        state.isRefresh = false;
        state.error = payload || '';
      });
  },
});

export const { selectToken, selectUser, selectIsLoggedIn, selectIsRefresh } =
  authSlice.selectors;
export const userReducer = authSlice.reducer;
