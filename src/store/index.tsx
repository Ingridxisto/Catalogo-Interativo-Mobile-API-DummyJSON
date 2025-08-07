import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter-slice';
import detailsProductReducer from './slices/details-product-slice';
import userReducer from './slices/logout';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    detailsProduct: detailsProductReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
