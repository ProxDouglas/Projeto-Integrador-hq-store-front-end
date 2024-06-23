'use client';
import SearchBarBanner from '@/components/Input/SearchBarBanner';
import ShowCase from '@/components/ShowCase';
import { useParams } from 'next/navigation';

interface ParamsShowCase {
    id: string;
}

export default function PageShowcase() {
    const params = useParams<ParamsShowCase>();

    return (
        <div>
            <SearchBarBanner />
            <ShowCase />
        </div>
    );
}
