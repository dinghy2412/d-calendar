import { combineReducers } from 'redux';
// 缓存reducer
const reducers = {};

/**
 * 获取reducer方法
 * @return {Object} 返回所有模块的reducer
 */
export const getReducer = () => reducers;

/**
 * 设置缓存reducer
 * @param {Object} reducer 缓存reducer
 */
export const setReducer = (reducer) => {
    Object.assign(reducers, reducer);
    return reducers;
};

/**
 * redux 更新 reducer方法
 * @param  {Object} reducersObj 新的reducer
 * @param  {Object} app      kredux
 */
export const replaceReducer = (reducersObj, store) => {
    store.replaceReducer(combineReducers(reducersObj));
};

/**
 * 合并reduce 并且更新reducer
 * @param  {[type]} reducer [description]
 * @param  {[type]} store     store
 */
export default (reducer, store) => {
    replaceReducer(setReducer(reducer), store);
};
