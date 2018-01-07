import * as Types from '../action-types/userInfo';
import {setStorage, LOCALKEY} from '../local';

//actionCreator

export function update(data) {
    setStorage(LOCALKEY().CITY_KEY, data);
    return {
        type: Types.UPDATE_CITY,
        data: data
    }
}