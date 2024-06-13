'use server';
import InputSearchBar from '@/components/Input/InputSearchBar';
import getComicsPage, {
    PagesComics,
    PagesRequest,
} from '@/serverActions/hqs/getComicsPage';
import React from 'react';
import TypeFinder from '@/enums/TypeFinder';
import Card from '@/components/Card';

interface HomeProps {
    pagesComics: PagesComics;
}

export default async function Home() {
    let pagesComics: PagesComics = {
        comics: [],
        pages: 0,
    };
    try {
        pagesComics = await getComicsPage({
            take: 10,
            skip: 0,
            typeFinder: TypeFinder.NAME,
            keyword: [],
        });
    } catch (error) {
        console.error('Erro ao buscar os quadrinhos:', error);
    }

    return (
        <div>
            <section
                id="comics-home"
                className="flex justify-center items-center md:px-4"
            >
                <div className="flex flex-col items-center justify-center md:gap-[6px] md:max-w-screen-lg w-full">
                    <div className="w-full py-4 px-4 md:px-0">
                        <InputSearchBar />
                    </div>
                </div>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {pagesComics.comics.map((comics) => {
                    return <Card key={comics.id} name={comics.name} url={comics.images.length === 0 ? "" : comics.images[0].url} price={comics.price} />;
                })}
            </div>
        </div>
    );
}
