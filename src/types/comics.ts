import { Collection } from './collection';

export interface Comics {
  id: number;
  name: string;
  year_publication: number;
  month_publication: number;
  number_pages: number;
  publisher: string;
  age_rating: number;
  price: number;
  images: string[];
  collection: Collection[];
}
