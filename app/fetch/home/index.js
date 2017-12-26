//api/ad

import {get} from '../index';

/***
 * 获得ad列表
 * @returns {*}
 */
export function getAd() {
    return get('/api/ad');
}

/****
 * 获得列表的数据
 * @param city
 * @param page
 * @returns {*}
 */
export function getList(city, page) {
    return get(`/api/list/${city}/${page}`);
}