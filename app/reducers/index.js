//合并所有的reducer
import {combineReducers} from 'redux';
import {userInfo} from './userInfo';


export default combineReducers({
    userInfo
});