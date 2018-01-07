//合并所有的reducer
import {combineReducers} from 'redux';
import {userInfo} from './userInfo';
import {favourite} from './favourite';

export default combineReducers({
    userInfo,
    favourite
});