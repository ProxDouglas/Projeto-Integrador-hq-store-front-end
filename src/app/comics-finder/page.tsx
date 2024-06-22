'use client';
import InputSearchBar from '@/components/Input/InputSearchBar';
import getComicsPage from '@/serverActions/hqs/getComicsPage';
import React, { useCallback, useEffect, useState } from 'react';
import TypeFinder from '@/enums/TypeFinder';
import { Comics } from '@/types/comics';
import ComicsPanel from '@/components/ComicsPanel';

export default function ComicsFinder() {
    const [comics, setComics] = useState<Comics[]>([]);
    const [pagesLimit, setPagesLimit] = useState<number>(0);
    const [skip, setSkip] = useState<number>(0);

    const handleGetComics = useCallback(() => {
        getComicsPage({
            take: 10,
            skip: skip + 1,
            typeFinder: TypeFinder.NAME,
            keyword: [],
        }).then((pagesComics) => {
            setComics((prevProducts) => [
                ...prevProducts,
                ...pagesComics.comics,
            ]);
            setSkip((skipValue) => skipValue + 1);
        });
    }, [skip]);

    useEffect(() => {
        getComicsPage({
            take: 10,
            skip: skip,
            typeFinder: TypeFinder.NAME,
            keyword: [],
        }).then((pagesComics) => {
            setComics(pagesComics.comics);
            setPagesLimit(pagesComics.pages);
        });
    }, []);

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
            <div className="flex justify-center w-full md:h-83 md:bg-gray-50">
                <div className="flex w-full md:h-[1071px] h-full md:px-10 md:pt-8 gap-6">
                    <ComicsPanel comics={comics} />
                </div>
            </div>
            {skip < pagesLimit && (
                <div className="w-full backdrop-blur-sm bg-white/30 flex flex-col h-28 items-center justify-center px-6 pb-6 pt-2">
                    <button
                        className="bg-primary max-w-[345px] w-full h-12 rounded-[40px] text-white font-medium text-lg"
                        disabled={skip >= pagesLimit}
                        onClick={handleGetComics}
                    >
                        Ver mais
                    </button>
                </div>
            )}
        </div>
    );
}
