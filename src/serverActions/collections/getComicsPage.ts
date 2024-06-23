'use server'
import { Collection } from '@/types/collection';

export default async function getCollectionsByComicsName(
    comicsName: string,
): Promise<Collection[]> {
    const res = await fetch(process.env.API_URL + 'collections/comics/' + comicsName);

    if (!res.ok) {
        console.error("Erro na resposta do servidor: ", res.status);
        throw new Error(`Erro na resposta do servidor: ${res.status}`);
    }


    return res.json();
}
