'use server';
import TypeFinder from '@/enums/TypeFinder';
import { Comics } from '@/types/comics';

export interface FilterHqs {
    keyword: string[];
    typeFinder: TypeFinder;
}

export interface PagesRequest {
    take: number;
    skip: number;
    filterHqs: FilterHqs[];
}

export interface PagesComics {
    comics: Comics[];
    pages: number;
}

export default async function getComicsPage(
    pagesRequest: PagesRequest,
): Promise<PagesComics> {
    const res = await fetch(
        `${process.env.API_URL}comics/pages/take/${pagesRequest.take}/skip/${pagesRequest.skip}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pagesRequest.filterHqs),
        },
    );

    if (!res.ok) {
        console.error('Erro na resposta do servidor: ', res.status);
        throw new Error(`Erro na resposta do servidor: ${res.status}`);
    }

    return res.json();
}
