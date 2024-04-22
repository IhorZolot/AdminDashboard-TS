import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { userReducer } from './Auth/authSlice';
import { customerReducer } from './Customers/customerSlice';
import { orderReducer } from './Orders/sliceOrders';
import { productReducer } from './Products/productSlice';
import { supplierReducer } from './Suppliers/suppliersSlice';
import { dashboardReducer } from './Dashboard/dashboardSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, userReducer),
    dashboard: dashboardReducer,
    customers: customerReducer,
    orders: orderReducer,
    products: productReducer,
    suppliers: supplierReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
