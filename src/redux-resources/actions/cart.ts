export const addItemtoCart = function(cartItem: any) {
    return {
        type: 'ADD_ITEM',
        payload: {cartItem}
    }
}