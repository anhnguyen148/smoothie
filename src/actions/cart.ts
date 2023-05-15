import { createAction } from '@reduxjs/toolkit';

export interface Cart {
    items: any[]
}

export const setCart = createAction("CART", function prepare(
    cart: Cart
) {
    console.log("Here");
    return {
        payload: cart
    }
});