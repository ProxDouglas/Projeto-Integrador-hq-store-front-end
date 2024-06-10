import InputSearchBar from '@/components/Input/InputSearchBar';
import getComicsPage, { PagesRequest } from '@/serverActions/hqs/getComicsPage';
import { useCallback } from 'react';
import TypeFinder from '@/enums/TypeFinder';

export default async function Menu() {
    // const comics = getComicsPage({
    //     take: 10,
    //     skip: 0,
    //     typeFinder: TypeFinder.NAME,
    //     keyword: [],
    // });
    const comics = useCallback(() => {
        return getComicsPage({
            take: 10,
            skip: 0,
            typeFinder: TypeFinder.NAME,
            keyword: [],
        });
    }, []);

    console.log({comics});

    return (
        <section
            id="comics"
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
