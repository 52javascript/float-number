const {config} = require('../config')
const { isPosNumber, mergeArgumentsIsNumber } = require('./validate')
const _console = require('./console')
const utils = {
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
        let _options = JSON.parse(JSON.stringify(config))
        for (let key in options) {
            const item = options[key]
            // 如果配置项不合法，默认使用默认配置
            if (key === 'fixed') {
                console.log(mergeArgumentsIsNumber)
                _options[key] = !isPosNumber(item) ? config[key] : item
            }
            if (key === 'returnString') {
                _options[key] = typeof item === 'boolean' ? item : config[key]
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
        if (options && options.returnOrigin === true) { // 是否原样返回，用于累计运算中
            return res
        }
        _console.log('包装前的结果' + res)
        const { fixed, returnString } = options
        let _res = res
        _res = fixed === -1 ? _res : _res.toFixed(fixed)
        _res = returnString ? (_res + '') : _res
        _console.log('最终结果：' + _res)
        return _res
    },
    getChainParams(number) {
        // const _options = utils.mergeOptions({})
        const _arguments = mergeArgumentsIsNumber([number, 0.01], true)
        const _params0 = this._chain.getChainRes()
        const _params1 = _arguments[0]
        return [_params0, _params1]
    }
}
module.exports = utils
