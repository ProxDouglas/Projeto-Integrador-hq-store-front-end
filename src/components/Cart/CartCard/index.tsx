'use client';
import { Comics } from '@/types/comics';
import Image from 'next/image';

interface ICardCartItemProps {
    comics: Comics;
}

export default function CartCard({ comics }: Readonly<ICardCartItemProps>) {
    return (
        <Image
            className="w-full h-full"
            style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
            }}
            src={comics.image.url}
            alt={comics.name}
            loading="lazy"
            width={170}
            height={400}
        />
    );
}
