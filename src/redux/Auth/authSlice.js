import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    email: '',
  },
  token: '',
  error: '',
  isLoggidIn: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder;
  },
});

export const userReduser = authSlice.reducer;
