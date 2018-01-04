import {get, post} from '../index';

/****
 * 获得订单的列表
 * @param username
 * @returns {*}
 */
export function getOrderList(username) {
    return get(`/api/orderlist/${username}`);
}

export function commitData(obj) {
    return post('/api/comment', obj);
}