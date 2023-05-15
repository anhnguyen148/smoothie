export const addItemtoCart = function(newItem: any) {
    return {
        type: 'ADD_ITEM',
        payload: {newItem}
    }
}