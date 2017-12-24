//api/ad

import {get} from '../index';

/***
 * 获得ad列表
 * @returns {*}
 */
export function getAd() {
    return get('/api/ad');
}