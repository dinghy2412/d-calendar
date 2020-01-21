import invariant from 'invariant';
import { NAMESPACE_SEP } from './constants';

/**
 * @desc 添加方法名前缀
 * @param { Object } obj effect、reducers对象
 * @param { String } namespace
 * @param { String } type 类型 effect、reducer
 * @returns {{}}
 */
function prefix(obj, namespace, type) {
    return Object.keys(obj).reduce((memo, key) => {
        invariant(
            key.indexOf(`${namespace}${NAMESPACE_SEP}`) !== 0,
            `[prefixNamespace]: ${type} ${key} 不应该以namespace为前缀 ${namespace}`,
        );
        const newKey = `${namespace}${NAMESPACE_SEP}${key}`;
        memo[newKey] = obj[key];
        return memo;
    }, {});
}

/**
 * @desc 格式化effects、reducers方法名
 * @param { Object } model
 * @returns {*}
 */
export default function prefixNamespace(model) {
    const {
        namespace,
        effects,
        reducers
    } = model;

    if (reducers) {
        model.reducers = prefix(reducers, namespace, 'reducer');
    }
    if (effects) {
        model.effects = prefix(effects, namespace, 'effect');
    }
    return model;
}
