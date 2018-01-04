import 'whatwg-fetch';
import 'es6-promise';

export function get (url) {
    return fetch(url, {
        Accept: 'application/json'
    })
}

export function post(url, obj) {
    return fetch(url, {
        method: 'POST',
        //a=1&b=2&c=3
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: toUrlEncode(obj)
    })
}

/**
 * 转化对象
 * @param obj
 */
function toUrlEncode(obj) {
    let arr = []
    for (let key in obj) {
        arr.push(`${key}=${obj[key]}`);
    }
    return arr.join('&');
}