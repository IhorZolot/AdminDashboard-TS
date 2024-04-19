// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { API } from '../../config/adminConfig';

// export const fetchIncomeExpenses = createAsyncThunk(
//   'dashboard/fetchIncomeExpenses',
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await API.get('dashboard');
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
