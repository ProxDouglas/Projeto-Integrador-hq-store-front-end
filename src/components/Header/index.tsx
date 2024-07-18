'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import Logo from '../../assets/Logo.png';
import LoginButton from './LogginButton';
import CartButton from './CartButton';

export default function Header() {
    const router = useRouter();

    function redirectHome() {
        router.push('/home');
    }
    
    return (
        <header className="flex items-center justify-between py-0 pl-6 pr-4 bg-primary text-white">
            <button className="h-[75px] w-[75px]" onClick={() => redirectHome()}>
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
            </button>
            <div className="flex items-center space-x-8">
                <LoginButton />
                <CartButton />
            </div>
        </header>
    );
}
