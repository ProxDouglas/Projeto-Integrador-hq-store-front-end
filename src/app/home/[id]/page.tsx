// 'use client';
import React, { useEffect, useState } from 'react';
import SearchBarBanner from '@/components/Input/SearchBarBanner';
import ShowCase from '@/components/ShowCase';
import getComicsById from '@/serverActions/hqs/getComicsId';
import { Comics } from '@/types/comics';
import ComicsNotFound from '@/components/ShowCase/ComicsNotFound';

interface IHomeId {
    params: {
        id: string;
    };
}

export default async function HomeId({ params }: IHomeId) {
    let comics = null;
    try {
        
        comics = await getComicsById(parseInt(params.id));
    } catch (error) {
        console.log("Teste");
    }

    return (
        <div>
            <SearchBarBanner />
            <div className="flex justify-center w-full md:h-83 md:bg-gray-50">
                <div className="flex w-full md:h-[85vh] h-full md:px-10 md:pt-8 gap-6">
                    {comics ? <ShowCase comics={comics} /> : <ComicsNotFound/>}
                </div>
            </div>
        </div>
    );
}

// export default function HomeId({params}: IHomeId) {
//     const [comics, setComics] = useState<Comics>();

//     // const comics = await getComicsById(parseInt(params.id));

//     useEffect(() => {
//         getComicsById(parseInt(params.id)).then((comics) => setComics(comics));
//     }, []);

//     return (
//         <div>
//             <SearchBarBanner />
//             <div className="flex justify-center w-full md:h-83 md:bg-gray-50">
//                 <div className="flex w-full md:h-[85vh] h-full md:px-10 md:pt-8 gap-6">
//                     {comics && <ShowCase comics={comics} />}
//                 </div>
//             </div>
//         </div>
//     );
// }
