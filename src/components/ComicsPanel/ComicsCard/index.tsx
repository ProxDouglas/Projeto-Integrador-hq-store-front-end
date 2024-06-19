'use client';
import { Comics } from '@/types/comics';
import { classNames } from '@/util/classNames';
import Image from 'next/image';
import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

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
                <div
                    className="mb-4"
                    style={{
                        width: '200px',
                        height: '300px',
                        position: 'relative',
                    }}
                >
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
                        width={300}
                        height={400}
                    />
                </div>
                <div className="mb-2">
                    <h2 className="text-lg font-bold">{comics.name}</h2>
                    <p className="text-gray-500">
                        Ano {comics.year_publication}
                    </p>
                    {/* <p className="text-gray-500">Mês {comics.month_publication}</p> */}
                    <strong>
                        <p className="text-gray-500">
                            R$ {comics.price.toFixed(2)}
                        </p>
                    </strong>
                </div>
                <div className="container flex">
                    <button
                        className="bg-primary flex items-center justify-between w-full font-medium gap-3 text-white p-2 border rounded shadow"
                        type="button"
                    >
                        <CiShoppingCart />
                        {/* <Image
                            src="/images/icons/search-icon.svg"
                            width={19.71}
                            height={19.71}
                            alt="search-icon"
                        /> */}
                        <span>Adicionar ao Carrinho</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
