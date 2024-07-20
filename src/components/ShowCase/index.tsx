'use client';

import { Comics } from '@/types/comics';
import CardShowCase from './CardShowCase';
import { CiShoppingCart } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/features/cart/cartSlice';

interface IShowCase {
    comics: Comics;
}

export default function ShowCase({ comics }: IShowCase) {
    const dispatch = useDispatch();

    function addCartItem(comics: Comics) {
        dispatch(addItem({ comics, amount: 1 }));
    }

    return (
        <div className="card shadow-4 md:bg-gray-50 w-full">
            <div className="flex justify-center w-full md:h-83">
                <div className="flex flex-col md:max-w-[1200px] h-full w-full bg-white gap-14 md:shadow-md md:py-5">
                    <div className="grid grid-cols-2 gap-5 px-4">
                        <CardShowCase comics={comics} />
                    </div>
                    <div className="pl-6">
                        <div className="h-12">
                            <h2 className="text-lg font-bold">
                                {comics.name.substring(0, 30)}
                            </h2>
                        </div>
                        <p className="text-gray-500">
                            Ano: {comics.year_publication}
                        </p>
                        <p className="text-gray-500">
                            Número de Paginas: {comics.number_pages}
                        </p>
                        <p className="text-gray-500">
                            Ano de Públicação: {comics.year_publication}
                        </p>
                        <p className="text-gray-500">
                            Públicadora: {comics.publisher}
                        </p>
                        <strong>
                            <p className="text-gray-500">
                                R$ {comics.price.toFixed(2)}
                            </p>
                        </strong>
                        <div className="container w-full flex justify-center">
                            <button
                                className="bg-primary flex items-center justify-between font-medium gap-3 text-white p-2 border rounded shadow w-[150px]"
                                type="button"
                                onClick={() => addCartItem(comics)}
                            >
                                <div className="flex justify-center items-center">
                                    <CiShoppingCart className="w-10" />
                                    <span>Adicionar </span>
                                </div>
                            </button>
                            <button
                                className="bg-primary flex items-center justify-between font-medium gap-3 text-white p-2 border rounded shadow w-[150px]"
                                type="button"
                                // onClick={() => addCartItem(comics)}
                            >
                                <div className="flex justify-center items-center">
                                    <CiShoppingCart className="w-10" />
                                    <span>Comprar </span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
