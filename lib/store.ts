import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AppReducers from './slices';
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { apiSlice } from './api/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// persistor.purge();


type NoopStorage = {
  getItem: (key: string) => Promise<null>;
  setItem: (key: string, value: string) => Promise<any>;
  removeItem: (key: string) => Promise<void>;
};



const createNoopStorage = (): NoopStorage => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: string) {
      return Promise.resolve();
    },
  };
};

// define persist configuration
const persistConfig = {
  key: "root",
  version: 1,
  blacklist: ['pages'],
  storage:
    typeof window === "undefined"
      ? createNoopStorage()
      : createWebStorage("local"),
};

const persistReducers = persistReducer(persistConfig, AppReducers)



const store = configureStore({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
});

// setup listeners for persisting redux state
setupListeners(store.dispatch);

// define types for root state and app dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;