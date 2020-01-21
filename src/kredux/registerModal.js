import { isObject } from 'Src/utils/common';
import combineReducers from './reducers';
import { addAction } from './actions';
import prefixNamespace from './prefixNamespace';
import { REDUCER_NAME } from './constants';
import addModal from './modals';

export default function registerModal(modelConfig, store) {
    if (!isObject(modelConfig.reducers)) {
        modelConfig.reducers = {};
    }
    modelConfig.reducers[REDUCER_NAME] = setReducers;
    const prefixedModel = prefixNamespace({ ...modelConfig });
    addModal(prefixedModel);
    addAction(modelConfig, store);
    combineReducers({
        [modelConfig.namespace]: setReducers
    }, store);
    return prefixedModel;

    /**
     * @desc 默认reducer方法
     * @param { Object } initialState 初始化state
     * @param { Object } payload action中的状态参数
     * @param { String } type action的type
     * @returns { Object } 合并后新的状态数据
     */
    function setReducers(initialState = modelConfig.initialState, { payload = {}, type = '' }) {
        if (type === `${modelConfig.namespace}/${REDUCER_NAME}` && payload instanceof Object) {
            return {
                ...initialState,
                ...payload
            };
        } else {
            return initialState;
        }
    }
}
