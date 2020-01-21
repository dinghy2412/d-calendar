import { isObject } from 'Src/utils/common';
import { REDUCER_NAME } from './constants';

/**
 * 全局 action 存放处
 */
const actions = {};
export default actions;

/**
 * @dsc 添加 action
 * @param { Object } modelConfig model配置
 * @param { Object } store redux store
 */
export const addAction = (modelConfig, store) => {
    let newAction = {};

    newAction[modelConfig.namespace] = {};

    if (isObject(modelConfig.effects)) {
        Object.assign(newAction[modelConfig.namespace], formatReducers(modelConfig.effects, 'effect'));
    }

    if (isObject(modelConfig.reducers)) {
        Object.assign(newAction[modelConfig.namespace], formatReducers(modelConfig.reducers, 'reducer'));
    }

    Object.assign(actions, newAction); // 将整理后的action合并到全局到actions中

    /**
     * @desc 格式化reducers
     * @param { Object } reducers
     * @param { String } type effect、reducer
     * @returns { Object } 整理后的reducers
     */
    function formatReducers(reducers, type) {
        let newEffects = {};
        if (isObject(reducers)) {
            for (let i in reducers) {
                switch (type) {
                case 'effect':
                    newEffects[i] = function(payload) {
                        return new Promise((resolve, reject) => {
                            store.dispatch({
                                type: `${modelConfig.namespace}/${i}`,
                                payload,
                                __kredux_resolve: resolve,
                                __kredux_reject: reject
                            });
                        });
                    };
                    break;

                case 'reducer':
                    newEffects[i] = function(payload) {
                        if (i !== REDUCER_NAME) {
                            payload = reducers[i](payload, store.getState);
                        }
                        store.dispatch({
                            type: `${modelConfig.namespace}/${REDUCER_NAME}`,
                            payload
                        });
                    };
                    break;
                }
            }
        }

        return newEffects;
    }
};
