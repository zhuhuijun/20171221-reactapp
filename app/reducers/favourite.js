import * as Types from '../action-types/favourite';

let initState = [];

export function favourite(state = initState, action) {
    switch (action.type) {
        case Types.Add:
            return [...state, action.data];
        case Types.REMOVE:
            return state.filter(item => action.data !== item);
        default:
            return state;
    }
}