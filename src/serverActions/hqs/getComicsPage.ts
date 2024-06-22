'use server'
import TypeFinder from '@/enums/TypeFinder';
import { Comics } from '@/types/comics';

export interface PagesRequest {
    take: number;
    skip: number;
    keyword: string[];
    typeFinder: TypeFinder;
}

export interface PagesComics {
  comics: Comics[],
  pages: number
}

export default async function getComicsPage(
    pagesRequest: PagesRequest,
): Promise<PagesComics> {
    let queryUrl = `comics/pages/take/${pagesRequest.take}/skip/${pagesRequest.skip}?typeFinder=${pagesRequest.typeFinder}`;
    pagesRequest.keyword.forEach((keyword) => {
        queryUrl = queryUrl + '&keyword=' + keyword;
    });

    const res = await fetch(process.env.API_URL + queryUrl, { cache: 'force-cache' });

    if (!res.ok) {
        console.error("Erro na resposta do servidor: ", res.status);
        throw new Error(`Erro na resposta do servidor: ${res.status}`);
    }

    return res.json();
}
