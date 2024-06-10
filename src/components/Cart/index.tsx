// components/Cart.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export default function Cart() {
    const items = useSelector((state: RootState) => state.cart.items);

    return (
        <div className="absolute top-16 right-0 w-64 p-4 bg-white border rounded shadow-lg">
            <h2 className="mb-4 text-lg font-bold">Carrinho</h2>
            {items.length > 0 ? (
                <ul>
                    {items.map((item, index) => (
                        <li key={index} className="mb-2">
                            {item.name} - {item.quantity} x ${item.price}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Seu carrinho está vazio.</p>
            )}
        </div>
    );
}
