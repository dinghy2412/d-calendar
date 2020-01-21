/**
 * 全局 modal 存放处
 */
export const modals = [];

/**
 * @desc 添加modal方法
 * @param modal
 * @returns {Array}
 */
export default (modal) => {
    modals.push(modal);
    return modals;
};
