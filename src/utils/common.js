
/**
 * 判断是否是对象
 * @param {*} obj 判断对象
 * @return {boolean}
 */
export function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}
