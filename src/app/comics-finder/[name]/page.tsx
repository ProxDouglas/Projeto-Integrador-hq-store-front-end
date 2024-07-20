'use client';
import getComicsPage, { FilterHqs } from '@/serverActions/hqs/getComicsPage';
import React, { useCallback, useEffect, useState } from 'react';
import { redirect, useRouter } from 'next/navigation';
import TypeFinder from '@/enums/TypeFinder';
import { Comics } from '@/types/comics';
import ComicsPanel from '@/components/ComicsPanel';
import FilterOptions from '@/components/FilterOptions';
import getCollectionsByComicsName from '@/serverActions/collections/getComicsPage';
import { Collection } from '@/types/collection';
import SearchBarBanner from '@/components/Input/SearchBarBanner';

interface IComicsFinder {
    params: {
        name: string;
    };
}

export default function Home({ params }: IComicsFinder) {
    const router = useRouter();
    const name = decodeURIComponent(params.name ?? '');

    const [comics, setComics] = useState<Comics[]>([]);
    const [collections, setCollections] = useState<Collection[]>([]);
    const [pagesLimit, setPagesLimit] = useState<number>(0);
    const [skip, setSkip] = useState<number>(0);
    const [filterHqs, setFilterHqs] = useState<FilterHqs[]>([
        {
            typeFinder: TypeFinder.NAME,
            keyword: [name],
        },
    ]);

    const handleGetComics = useCallback(() => {
        getComicsPage({
            take: 10,
            skip: skip + 1,
            filterHqs: [
                {
                    typeFinder: TypeFinder.NAME,
                    keyword: [],
                },
            ],
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
            setComics([]);
            getComicsPage({
                take: 10,
                skip: skip,
                filterHqs: [
                    {
                        typeFinder: TypeFinder.NAME,
                        keyword: [name],
                    },
                ],
            }).then((pagesComics) => {
                setComics(pagesComics.comics);
                setPagesLimit(pagesComics.pages);
            });

            getCollectionsByComicsName(name).then((collections) =>
                setCollections(collections),
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function hendleSearchName(searchTerm: string) {
        router.push(`/comics-finder/${searchTerm}`);
    }

    function handleSearch(typeFinder: TypeFinder, keywords: string[]) {
        console.log(keywords);
        const newFilterHqs = [...filterHqs];

        const newFilterCollection: FilterHqs = {
            keyword: keywords,
            typeFinder: TypeFinder.COLLECTION,
        };

        let filterCollection = newFilterHqs.find(
            (filter) => filter.typeFinder === typeFinder,
        );

        if (!filterCollection) {
            newFilterHqs.push(newFilterCollection);
        } else {
            filterCollection.keyword = newFilterCollection.keyword;
            filterCollection.typeFinder = newFilterCollection.typeFinder;
        }

        console.log({ filterCollection, newFilterCollection });

        handleSearchEvent(newFilterHqs);
    }

    async function handleSearchEvent(filterHqs: FilterHqs[]) {
        getComicsPage({
            take: 10,
            skip: skip,
            filterHqs: filterHqs,
        }).then((pagesComics) => {
            setComics(pagesComics.comics);
            setPagesLimit(pagesComics.pages);
            setFilterHqs(filterHqs);
        });
    }

    if (!name) return redirect('/home');

    return (
        <div>
            <SearchBarBanner
                handleSearch={hendleSearchName}
                comicsName={name}
            />
            <div className="flex justify-center w-full md:h-83 md:bg-gray-50">
                <div className="flex w-full md:min-h-[1071px] h-full md:px-10 md:pt-8 gap-6">
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
