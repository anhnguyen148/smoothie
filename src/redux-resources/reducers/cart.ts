const initialState = { items: [] };

export default function cartReducer(state: any = initialState, action: any) {
    switch (action.type) {
        case 'ADD_ITEM':
            const newStateArr: any[] = state.items;
            newStateArr.push(action.payload);
            state.items = newStateArr
            return state;
        default:
            return state;
    }
}
