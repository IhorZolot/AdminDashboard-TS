import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  myReducer: {
    value: 0,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: rootReducer,
});
