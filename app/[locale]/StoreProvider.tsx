"use client";

import store from '@/lib/store';
import { Toaster } from 'react-hot-toast';
import { Provider, useSelector } from 'react-redux'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const persistor = persistStore(store)
export const StoreProvider = ({children}: {children: React.ReactNode}) => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null} >
                {children}
                <Toaster position={'top-right'} />
            </PersistGate>
        </Provider>
    )
}