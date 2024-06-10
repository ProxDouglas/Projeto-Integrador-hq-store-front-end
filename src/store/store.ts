import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';

export function makeStore() {
    return configureStore({
        reducer: combineReducers({ cart: cartReducer }),
    });
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
