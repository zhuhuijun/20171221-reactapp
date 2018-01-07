import * as ActionTypes from '../action-types/favourite';

export function myAdd(id) {
    return {
        type: ActionTypes.Add,
        data: id
    }
}

export function myRemove(id) {
    return {
        type: ActionTypes.REMOVE,
        data: id
    }
}

