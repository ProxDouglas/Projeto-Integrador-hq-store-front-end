'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '@/store/features/cart/cartSlice';
import { FaShoppingCart } from 'react-icons/fa';
import Cart from '../Cart';
import { RootState } from '@/store/store';
import Image from 'next/image';
import Logo from '../../assets/Logo.png';
import LoginButton from './LogginButton';

export default function Header() {
    const dispatch = useDispatch();
    const cartOpen = useSelector((state: RootState) => state.cart.open);

    const handleCartClick = () => {
        dispatch(toggleCart());
    };

    return (
        <header className="flex items-center justify-between py-0 pl-6 pr-4 bg-primary text-white">
            {/* <div className="text-xl font-bold">Graphics Hq</div> */}
            <a className="h-[75px] w-[75px]" href="/home">
                <Image
                    className="w-full h-full h-[100px]"
                    style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                    }}
                    src={Logo}
                    alt={'Logo'}
                    loading="lazy"
                    width={170}
                    height={400}
                />
            </a>
            <div className="flex items-center space-x-8">
                <LoginButton/>
                <button onClick={handleCartClick} className="relative">
                    <FaShoppingCart size={24} />
                    {/* <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                        3
                    </span> */}
                </button>
            </div>
            {cartOpen && <Cart />}
        </header>
    );
}
