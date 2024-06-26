'use client';

import { Comics } from '@/types/comics';
import CardShowCase from './CardShowCase';

interface IShowCase {
    comics: Comics;
}

export default function ShowCase({ comics }: IShowCase) {
    return (
        <div className="flex justify-center w-full md:h-83 md:bg-gray-50">
            <div className="flex flex-col md:max-w-[1200px] h-full w-full bg-white gap-14 md:shadow-md md:py-5">
                <div className="grid grid-cols-2 gap-5 px-4">
                    <CardShowCase comics={comics}/>
                </div>
                <div>
                    <h2>{comics.name}</h2>
                    <h4>Paginas: {comics.number_pages}</h4>
                    <h4>Ano de publicação: {comics.year_publication}</h4>
                </div>
            </div>
        </div>
    );
}
