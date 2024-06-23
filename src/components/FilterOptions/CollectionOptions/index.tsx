'use client';

import { Collection } from '@/types/collection';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface IFinderOptions {
    collections: Collection[];
    handleSelectCollection: Function;
}

export default function CollectionOptions({
    collections,
    handleSelectCollection,
}: Readonly<IFinderOptions>) {
    const [selectCollections, setSelectCollections] = useState<number[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    function toggleOpen() {
        setIsOpen(!isOpen);
    }

    function handleCollectionCheckBox(id: number) {
        let newSelectCollections = [];

        if (selectCollections.includes(id)) {
            newSelectCollections = selectCollections.filter(
                (collection_id) => collection_id !== id,
            );
        } else {
            newSelectCollections = [...selectCollections, id];
        }

        setSelectCollections(newSelectCollections);
        handleSelectCollection(newSelectCollections.map(id => id.toString()));
    }

    return (
        <div>
            <div className="container flex justify-center items-center">
                <div className="card container shadow bg-white p-4">
                    <button
                        className="flex justify-between w-full"
                        onClick={toggleOpen}
                    >
                        Coleções
                        <IoIosArrowDown />
                    </button>
                </div>
            </div>
            <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                }`}
            >
                {collections.map((collection) => (
                    <div
                        key={collection.id}
                        className="p-2 bg-gray-100 border rounded-b-lg flex items-center"
                    >
                        <input
                            type="checkbox"
                            checked={selectCollections.includes(collection.id)}
                            onChange={() =>
                                handleCollectionCheckBox(collection.id)
                            }
                            className="mr-2"
                        />
                        <label className="text-sm">{collection.name}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}
