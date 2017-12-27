import {get} from '../index';

/**
 * 获得商户详情
 * @param id
 * @returns {*}
 */
export function getInfo(id) {
    return get(`/api/detail/info/${id}`);
}

/***
 * 获得评论列表
 * @param id
 * @param page
 * @returns {*}
 */
export function getComment(id, page) {
    return get(`/api/detail/comment/${id}/${page}`);
}