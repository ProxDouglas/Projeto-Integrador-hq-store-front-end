'use client';
import { Comics } from '@/types/comics';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import { CiShoppingCart } from 'react-icons/ci';

interface ICardProps {
    comics: Comics;
    isSelected: boolean;
}

export default function ComicsCard({
    comics,
    isSelected,
}: Readonly<ICardProps>) {
    const router = useRouter();

    function redirectVitrine(id: number){
        router.push(`/home/${id}`);
    }
    
    return (
        <div className="container flex justify-center items-center">
            <div className="card container border rounded shadow p-4 bg-white w-[220px] h-[450px]">
                <button
                    onClick={() => redirectVitrine(comics.id)}
                    className="mb-4"
                    style={{
                        width: '190px',
                        height: '262px',
                        position: 'relative',
                    }}
                >
                    <Image
                        className="w-full h-full h-[100px]"
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                        }}
                        src={comics.image.url}
                        alt={comics.name}
                        loading="lazy"
                        width={170}
                        height={400}
                    />
                </button>
                <div className="mb-2">
                    <div className="h-12">
                        <h2 className="text-lg font-bold">
                            {comics.name.substring(0, 30)}
                        </h2>
                    </div>
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
                <div className="container ">
                    <button
                        className="bg-primary flex items-center justify-between w-full font-medium gap-3 text-white p-2 border rounded shadow "
                        type="button"
                    >
                        <div className="flex justify-center items-center">
                            <CiShoppingCart className="w-10"/>
                            <span>Adicionar </span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
