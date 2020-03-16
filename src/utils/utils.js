const {config} = require('../config')
const { isPosNumber } = require('./validate')

module.exports = {
    /**
     * 初始化参数
     * @param options 合并参数，并且进行校验
     * @returns {{}|{returnString: boolean, fixed: number, hex: number}}
     */
    mergeOptions: function (options) {
        if (typeof options !== 'object') {
            console.error(`配置项参数${options}不合法, 将使用默认配置项`)
            return config
        }
        const _options = config
        for (let key in options) {
            const item = options[key]
            // 如果配置项不合法，默认使用默认配置
            if (key === 'fixed') {
                _options[key] = !isPosNumber(item) ? config[key] : item
            }
        }
        return _options
    },
    /**
     * 对结果进行包装
     * @param res 结果
     * @param options 配置项
     * @returns {string|Number} 显示的结果
     */
    packResult: function (res, options) {
        console.log('包装前的结果' + res)
        const { fixed, returnString } = options
        let _res = res // 最终结果
        _res = fixed === -1 ? _res : _res.toFixed(fixed)
        _res = returnString ? _res + '' : _res
        console.log('最终结果：' + res)
        return _res
    }
}
