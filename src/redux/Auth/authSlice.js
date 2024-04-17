import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    email: '',
  },
  token: '',
  error: '',
  isLoggedIn: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});

export const userReducer = authSlice.reducer;
