import { Collection } from './collection';
import { Image } from './image';

export interface Comics {
    id: number;
    name: string;
    year_publication: number;
    month_publication: number;
    number_pages: number;
    publisher: string;
    age_rating: number;
    price: number;
    image: Image;
    collection: Collection[];
}
