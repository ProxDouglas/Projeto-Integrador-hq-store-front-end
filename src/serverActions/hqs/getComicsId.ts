'use server'

import { Comics } from "@/types/comics";


export default async function getComicsById(
    id: number,
): Promise<Comics> {
    const res = await fetch(process.env.API_URL + 'comics/' + id);

    if (!res.ok) {
        console.error("Erro na resposta do servidor: ", res.status);
        throw new Error(`Erro na resposta do servidor: ${res.status}`);
    }

    return res.json();
}
