import { combineReducers } from '@reduxjs/toolkit';
import { CartReducer } from './cart';

const rootReducer = combineReducers({
    cart: CartReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

