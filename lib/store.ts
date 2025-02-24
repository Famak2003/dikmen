import { configureStore } from '@reduxjs/toolkit';
import AppReducers from './reducers';
import { thunk } from 'redux-thunk';
// persistor.purge();



const store = configureStore({
  reducer: AppReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(thunk),
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;