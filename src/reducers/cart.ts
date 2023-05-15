import { createReducer } from "@reduxjs/toolkit";
import { setCart } from '../actions/cart';

const cart = {
    items: []
}

export const CartReducer = createReducer(
    {cart},
    {
        [setCart.type]: (state, action) => ({
            ...state,
            cart: {...action.payload}
        })
    }
);