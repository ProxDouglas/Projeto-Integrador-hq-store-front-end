import { Comics } from "./comics";

export interface CartItem {
    comics: Comics;
    amount: number;
}

export default interface Cart {
    items: CartItem[];
}
