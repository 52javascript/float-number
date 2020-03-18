const {
    mergeArgumentsIsNumber
} = require('./utils/validate')

const {
    mergeOptions,
    mergeKey
} = require('./utils/utils')

const {
    _add,
    _mul,
    _div,
    _adds
} = require('./core')

var __global = {}

function Calc (options) {
    __global.options = this._options = mergeOptions(options, __global.options) // 合并配置项
    return this
}

/**
     * 两个数的加法
     * @param a
     * @param b
     * @param options 配置
     * @returns {*}
     */
    
Calc.prototype.add = function (a, b, options = {}) {
    const _options = mergeOptions(options, __global.options)
    const _arguments = mergeArgumentsIsNumber([...arguments])
    return _add(_arguments[0], _arguments[1], _options)
}

/**
     * 两个数的减法
     * @param a
     * @param b
     * @param fixed 保留几位小数
     * @returns {*}
     */
Calc.prototype.sub = function (a, b, options = {}) {
    const _options = mergeOptions(options, __global.options)
    const _arguments = mergeArgumentsIsNumber([...arguments])
    // 减法相当于加上b的负数
    return _add(_arguments[0], -(_arguments[1]), _options)
}
/**
 * 两个数的乘法
 * @param a
 * @param b
 * @param options
 * @returns {*}
 */
Calc.prototype.mul = function (a, b, options = {}) {
    const _options = mergeOptions(options, __global.options)
    const _arguments = mergeArgumentsIsNumber([...arguments])
    return _mul(_arguments[0], (_arguments[1]), _options)
}
/**
 * 两个数的除法
 * @param a
 * @param b
 * @param options
 * @returns {*|undefined}
 */
Calc.prototype.div = function (a, b, options = {}) {
    const _options = mergeOptions(options, __global.options)
    const _arguments = mergeArgumentsIsNumber([...arguments])
    return _div(_arguments[0], (_arguments[1]), _options)
}

Calc.prototype.adds = function(arr, options = {}) {
    const _options = mergeOptions(options, __global.options)
    const _arguments = mergeArgumentsIsNumber(arr, true)
    return _adds(_arguments, _options)
}

exports.Calc =  Calc
exports.add = Calc.prototype.add
exports.adds = Calc.prototype.adds
exports.mul = Calc.prototype.mul
exports.sub = Calc.prototype.sub
exports.div = Calc.prototype.div
