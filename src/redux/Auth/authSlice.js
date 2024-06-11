import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  signupThunk,
} from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  error: '',
  isLoading: false,
  isLoggedIn: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  selectors: {
    selectToken: (state) => state.token,
    selectUser: (state) => state.user,
    selectIsLoggedIn: (state) => state.isLoggedIn,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupThunk.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.error = '';
      })
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user.email = payload.email;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.error = '';
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.error = '';
        state.user.email = '';
        state.token = '';
        state.isLoggedIn = false;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.isLoggedIn = true;
        state.error = '';
      });
  },
});

export const { selectToken, selectUser, selectIsLoggedIn } =
  authSlice.selectors;
export const userReducer = authSlice.reducer;
