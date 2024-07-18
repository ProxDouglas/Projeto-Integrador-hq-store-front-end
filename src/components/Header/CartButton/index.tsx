'use client';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '@/store/features/cart/cartSlice';
import { RootState } from '@/store/store';
import { FaShoppingCart } from 'react-icons/fa';
import Cart from '../../Cart';

export default function CartButton() {
    const cart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    function handleCartClick() {
        dispatch(toggleCart());
    }

    function itenCarrinho() {
        return cart.items.length;
    }

    return (
        <div className="flex items-center justify-center p-2">
            <button onClick={handleCartClick} className="relative">
                <FaShoppingCart size={24} />
                <span className="absolute bottom-3 top-0 right-0 left-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                    {itenCarrinho()}
                </span>
            </button>
            {cart.open && <Cart />}
        </div>
    );
}
