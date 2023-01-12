import { CartProduct } from "./cartProducts";

export interface CartSummaryItem {
    id: number,
    quantity: number,
    product: CartProduct,
    lineValue: number
}