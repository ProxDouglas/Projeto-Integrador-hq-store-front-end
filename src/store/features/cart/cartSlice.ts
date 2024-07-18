import Cart from '@/types/Cart';
import { Comics } from '@/types/comics';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState extends Cart {
    open: boolean;
}

const initialState: CartState = {
    open: false,
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCart: (state) => {
            state.open = !state.open;
        },
        addItem: (
            state,
            action: PayloadAction<{ comics: Comics; amount: number }>,
        ) => {
            const { comics, amount } = action.payload;
            const existingItem = state.items.find(
                (item) => item.comics.id === comics.id,
            );
            if (existingItem) {
                existingItem.amount += amount;
            } else {
                state.items.push({ comics: comics, amount });
            }
        },
        setItemQuantity: (
            state,
            action: PayloadAction<{ comicId: number; amount: number }>,
        ) => {
            const { comicId, amount } = action.payload;
            const item = state.items.find((item) => item.comics.id === comicId);
            if (item) {
                item.amount = amount;
            }
        },
        incrementItemQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find(
                (item) => item.comics.id === action.payload,
            );
            if (item) {
                item.amount += 1;
            }
        },
        decrementItemQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find(
                (item) => item.comics.id === action.payload,
            );
            if (item && item.amount > 1) {
                item.amount -= 1;
            }
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(
                (item) => item.comics.id !== action.payload,
            );
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const {
    addItem,
    setItemQuantity,
    incrementItemQuantity,
    decrementItemQuantity,
    removeItem,
    clearCart,
    toggleCart,
} = cartSlice.actions;

export default cartSlice.reducer;
