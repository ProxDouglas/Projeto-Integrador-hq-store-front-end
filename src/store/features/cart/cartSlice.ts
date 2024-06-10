// store/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

interface CartState {
  open: boolean;
  items: CartItem[];
}

const initialState: CartState = {
  open: false,
  items: [
    { name: 'Produto 1', quantity: 2, price: 10.00 },
    { name: 'Produto 2', quantity: 1, price: 20.00 },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.open = !state.open;
    },
  },
});

export const { toggleCart } = cartSlice.actions;

export default cartSlice.reducer;
