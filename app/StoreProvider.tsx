"use client";

import { store } from '@/lib/store';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux'

export const StoreProvider = ({children}: {children: React.ReactNode}) => {
    return (
        <Provider store={store}>
            <Toaster position={'top-right'} />
            {children}
        </Provider>
    )
}