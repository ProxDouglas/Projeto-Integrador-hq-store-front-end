'use client';

import { Comics } from '@/types/comics';
import Image from 'next/image';

interface ICardShowCase {
    comics: Comics;
}

export default function CardShowCase({ comics }: ICardShowCase) {
    return (
        <div
            className="mb-4"
            style={{
                width: '390px',
                height: '562px',
                position: 'relative',
            }}
        >
            {/* <Image
                className="w-full h-full h-[100px]"
                style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                }}
                src={comics.image.url}
                alt={comics.name}
                quality={100}
                loading="lazy"
                width={170}
                height={400}
            /> */}
            <img
                className="w-full h-full h-[100px]"
                style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                }}
                src={comics.image.url}
                alt={comics.name}
                width={170}
                height={400}
            />
        </div>
    );
}
