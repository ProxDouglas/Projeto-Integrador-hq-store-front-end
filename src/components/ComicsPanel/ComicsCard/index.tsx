'use client';
import { Comics } from '@/types/comics';
import { classNames } from '@/util/classNames';
import Image from 'next/image';
import React from 'react';

interface ICardProps {
    comics: Comics;
    isSelected: boolean;
}

export default function ComicsCard({
    comics,
    isSelected,
}: Readonly<ICardProps>) {
    return (
        <div className="container flex justify-center items-center">
            <div className="card border rounded shadow p-4 bg-white">
                <div className="mb-4" style={{ width: '200px', height: '300px', position: 'relative' }}>
                    <Image
                        className="w-full h-full "
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                        }}
                        src={comics.image.url}
                        alt={comics.name}
                        loading="lazy"
                        // layout="fill"
                        // objectFit="cover"
                        width={300}
                        height={400}
                    />
                </div>
                <h2 className="text-lg font-bold">{comics.name}</h2>
                <p className="text-gray-500">${comics.price.toFixed(2)}</p>
            </div>
        </div>
    );
}
