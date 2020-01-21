import isPromise from 'is-promise';
import { NAMESPACE_SEP, REDUCER_NAME } from './constants';
import { modals } from './modals';

/**
 * @desc redux 中间件，实现 dispatch 的定制
 */
export default function createPromiseMiddleware() {
    return ({ dispatch, getState }) => (next) => (action) => {
        const { type: actionType } = action;
        let effect = searchReducer(actionType, 'effect'),
            reducer = searchReducer(actionType, 'reducer'),
            regexp = new RegExp('^.*/' + REDUCER_NAME + '$');
        if (regexp.test(actionType)) {
            return next(action);
        } else if (effect) {
            let effectResult = effect(action.payload, getState, dispatch);
            if (isPromise(effectResult)) {
                effectResult.then((result) => {
                    action.__kredux_resolve && action.__kredux_resolve(result);
                });
            } else {
                action.__kredux_resolve && action.__kredux_resolve(effectResult);
            }
            return effectResult;
        } else if (reducer) {
            let reducerResult = reducer(action.payload, getState);
            action.type = `${actionType.split(NAMESPACE_SEP)[0]}/${REDUCER_NAME}`;
            return next(Object.assign(action, {payload: reducerResult}));
        }
    };

    /**
     * @desc 查找effect、reducer方法
     * @param { String } actionType action中的type
     * @param { String } type 查找类型 reducer||effect
     * @returns { Function | undefined } 返回匹配的effect
     */
    function searchReducer(actionType, type) {
        if (!actionType || typeof actionType !== 'string') return;
        const [namespace] = actionType.split(NAMESPACE_SEP);
        const model = modals.filter((m) => m.namespace === namespace)[0];
        if (model) {
            switch (type) {
                case 'reducer':
                    if (model.reducers && model.reducers[actionType]) {
                        return model.reducers[actionType];
                    }
                    break;
                case 'effect':
                    if (model.effects && model.effects[actionType]) {
                        return model.effects[actionType];
                    }
                    break;

            }
        }
    }
}
