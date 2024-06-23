'use client';

import InputSearchBar from './InputSearchBar';
import { useRouter } from 'next/navigation';

interface ISearchBarBanner {
    comicsName?: string;
    handleSearch?: Function;
}

export default function SearchBarBanner({
    comicsName,
    handleSearch,
}: Readonly<ISearchBarBanner>) {
    const router = useRouter();

    function redirectSearch(searchTerm: string) {
        if (handleSearch) handleSearch(searchTerm);
        else if (typeof searchTerm === 'string' && searchTerm.trim() !== '') {
            router.push(`/comics-finder?name=${searchTerm}`);
        }
    }

    return (
        <section
            id="comics-home"
            className="flex justify-center items-center md:px-4 bg-cloud-background"
        >
            <div className="flex flex-col items-center justify-center md:gap-[6px] md:max-w-screen-lg w-full">
                <div className="w-full py-4 px-4 md:px-0">
                    <InputSearchBar
                        handleSearch={redirectSearch}
                        comicsName={comicsName}
                    />
                </div>
            </div>
        </section>
    );
}
