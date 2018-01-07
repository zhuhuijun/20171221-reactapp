import {get} from '../index';

/**
 * 获得查询的结果
 * @param page
 * @param city
 * @param keyword
 * @returns {*}
 */
export let getSearch = (page, city, keyword) => {
    return get(`/api/search/${page}/${city}/${keyword}`);
}