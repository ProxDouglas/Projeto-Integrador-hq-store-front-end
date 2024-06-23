'use client';

import { Collection } from '@/types/collection';
import CollectionOptions from './CollectionOptions';
import TypeFinder from '@/enums/TypeFinder';

interface IFinderOptions {
    collections: Collection[];
    handleSearch: Function;
}

export default function FilterOptions({
    collections,
    handleSearch,
}: IFinderOptions) {
    return (
        <div className="container w-[250px]">
            <div>
                <CollectionOptions
                    collections={collections}
                    handleSelectCollection={(keywords: string[]) =>
                        handleSearch(TypeFinder.COLLECTION, keywords)
                    }
                />
            </div>
        </div>
    );
}
