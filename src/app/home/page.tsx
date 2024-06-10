import InputSearchBar from '@/components/Input/InputSearchBar';
import getComicsPage, { PagesRequest } from '@/serverActions/hqs/getComicsPage';
import React from 'react';
import TypeFinder from '@/enums/TypeFinder';

export default async function Home() {
    let comicsList: any[] = [];
    try {
        comicsList = await getComicsPage({
            take: 10,
            skip: 0,
            typeFinder: TypeFinder.NAME,
            keyword: [],
        });
    } catch (error) {
        console.error('Erro ao buscar os quadrinhos:', error);
        // Aqui você pode definir um estado para mostrar uma mensagem de erro na UI, por exemplo.
    }

    return (
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
    );
}