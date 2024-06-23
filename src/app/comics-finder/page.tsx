'use client';
import getComicsPage, { PagesComics } from '@/serverActions/hqs/getComicsPage';
import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams, redirect } from 'next/navigation';
import TypeFinder from '@/enums/TypeFinder';
import { Comics } from '@/types/comics';
import ComicsPanel from '@/components/ComicsPanel';
import FilterOptions from '@/components/FilterOptions';
import getCollectionsByComicsName from '@/serverActions/collections/getComicsPage';
import { Collection } from '@/types/collection';
import SearchBarBanner from '@/components/Input/SearchBarBanner';

export default function Home() {
    const searchParams = useSearchParams();
    const name = searchParams.get('name');

    const [comics, setComics] = useState<Comics[]>([]);
    const [collections, setCollections] = useState<Collection[]>([]);
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
        if (name) {
            setComics((comicsList) => (comicsList = []));
            getComicsPage({
                take: 10,
                skip: skip,
                typeFinder: TypeFinder.NAME,
                keyword: [name],
            }).then((pagesComics) => {
                setComics(pagesComics.comics);
                setPagesLimit(pagesComics.pages);
            });

            getCollectionsByComicsName(name).then((collections) =>
                setCollections(collections),
            );
        }
    }, []);

    function hendleSearchName(searchTerm: string) {
        handleSearch(TypeFinder.NAME, [searchTerm]);
        getCollectionsByComicsName(searchTerm).then((collections) =>
            setCollections(collections),
        );
    }

    function handleSearch(type: TypeFinder, keyword: string[]) {
        getComicsPage({
            take: 10,
            skip: 0,
            typeFinder: type,
            keyword: keyword,
        }).then((pagesComics) => {
            setComics((prevProducts) => pagesComics.comics);
            setSkip((skipValue) => 1);
        });
    }

    if (!name) return redirect('/home');

    return (
        <div>
            <SearchBarBanner handleSearch={hendleSearchName} comicsName={name} />
            <div className="flex justify-center w-full md:h-83 md:bg-gray-50">
                <div className="flex justify-center w-full md:h-[1071px] h-full md:px-10 md:pt-8 gap-6">
                    <div>
                        <FilterOptions
                            collections={collections}
                            handleSearch={handleSearch}
                        />
                    </div>
                    <div>
                        <ComicsPanel comics={comics} />
                    </div>
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
