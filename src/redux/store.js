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
import dummyReducer from './Customers/Slise';
import { userReduser } from './Auth/authSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, userReduser),
    custome: dummyReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
