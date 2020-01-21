// app Discount config
/**
 * [exports 小程序基础信息配置]
 * @type {Object}
 * {
 *      appId:         String     小程序唯一标识
 *      secret:        String     小程序唯一SECRET
 *      type:          String     ks小程序类型--团队提前定义好的，统一管理
 *      appVersion:    String     小程序的版本号---initialize用
 *      apiVersion:    String     当前开发api版本号
 *      firstPage:     String     小程序入口页面---第一个页面的路径，直接从pages下面的目录开始写起如下
 * }
 */
export default {
    appId: 'wx1efad15e99f361eb',
    secret: '047bb8a49567e0523e1492efe5823d3a',
    type: 'miniapp',
    appVersion: 'v1.0',
    apiVersion: '6.2.0',
    firstPage: '/pages/today/index'
};
