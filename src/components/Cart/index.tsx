// components/Cart.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import {
    incrementItemQuantity,
    decrementItemQuantity,
    clearCart,
} from '@/store/features/cart/cartSlice';
import CartCard from './CartCard';
import AmountItem from './AmountItem';

export default function Cart() {
    const items = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    async function incrementValue(comics_id: number) {
        dispatch(incrementItemQuantity(comics_id));
    }

    async function decrementValue(comics_id: number) {
        dispatch(decrementItemQuantity(comics_id));
    }

    async function clearCartList() {
        dispatch(clearCart());
    }

    return (
        <div className="absolute top-16 right-0 w-[400px] p-4 bg-white border rounded shadow-lg z-10 max-h-[700px] overflow-auto">
            <h2 className="mb-4 text-lg font-bold text-black">Carrinho</h2>
            {items.length > 0 ? (
                <div>
                    <div className="grid grid-cols-2 gap-5 mb-2 ">
                        <button className="w-full bg-primary rounded ">
                            Fechar
                        </button>
                        <button
                            className="w-full bg-primary rounded"
                            onClick={() => clearCartList()}
                        >
                            Limpar
                        </button>
                    </div>
                    <ul>
                        {items.map((item, index) => (
                            <li
                                key={index}
                                className="card container border rounded shadow p-4 mb-2"
                            >
                                <div className="grid grid-cols-4 gap-5">
                                    <div className="flex justify-start h-[100px]">
                                        {/* <p className="text-black mr-2 flex item-center h-full">
                                        {item.amount} x
                                    </p> */}
                                        <div className="h-[100px] w-[68px]">
                                            <CartCard comics={item.comics} />
                                        </div>
                                    </div>
                                    <div className="col-span-3">
                                        <AmountItem
                                            amount={item.amount}
                                            increment={() =>
                                                incrementValue(item.comics.id)
                                            }
                                            decrement={() =>
                                                decrementValue(item.comics.id)
                                            }
                                        />

                                        <p className="text-black">
                                            {item.comics.name}
                                        </p>
                                        <p className="text-black">
                                            R$
                                            {(
                                                item.amount * item.comics.price
                                            ).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p className="text-black">Seu carrinho está vazio.</p>
            )}
        </div>
    );
}
