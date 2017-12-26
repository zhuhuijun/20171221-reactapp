//实现本地存储
export function getStorage(key) {
    return localStorage.getItem(key);
}

/**
 * 设置
 * @param key
 * @param val
 */
export function setStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
}

/**
 * 城市存储
 * @type {string}
 */
const CITY_KEY = "CITY_KEY";

/***
 * 获得本地存储的key
 * @returns {{CITY_KEY: string}}
 * @constructor
 */
export function LOCALKEY() {
    return {
        CITY_KEY
    }
}