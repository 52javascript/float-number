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
    _total
} = require('./core')

var __global = {}

function Calc (options) {
    __global.options = this._options = mergeOptions(options, __global.options) // 合并配置项
    this._chain = {
        /**
         * 设置链头
         * @param number
         */
        setChainRes: function (number) {
            this.chainRes = number
        },
        chainRes: 0,
        getChainRes: function () {
            return this.chainRes
        }
    }
    this.val = function () {
        return this._chain.getChainRes()
    }
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
    return _total(_arguments, '_add',  _options)
}
Calc.prototype.subs = function(arr, options = {}) {
    const _options = mergeOptions(options, __global.options)
    const _arguments = mergeArgumentsIsNumber(arr, true)
    return _total(_arguments, '_sub',  _options)
}
Calc.prototype.muls = function(arr, options = {}) {
    const _options = mergeOptions(options, __global.options)
    const _arguments = mergeArgumentsIsNumber(arr, true)
    return _total(_arguments, '_mul',  _options)
}
Calc.prototype.divs = function(arr, options = {}) {
    const _options = mergeOptions(options, __global.options)
    const _arguments = mergeArgumentsIsNumber(arr, true)
    return _total(_arguments, '_div',  _options)
}
function chain(initNumber) {
    const _arguments = mergeArgumentsIsNumber([initNumber, 0.01])
    const _super = new Calc()
    _super._chain.setChainRes(_arguments[0])
    return _super
}
Calc.prototype.cAdd = function(number) {
    let _this = this
    const _options = mergeOptions({}, __global.options)
    const _arguments = mergeArgumentsIsNumber([number, 0.01], true)
    const _params0 = _this._chain.getChainRes()
    const _params1 = _arguments[0]
    const _res = _add(_params0, _params1, {..._options, ...{returnOrigin: true}})
    _this._chain.setChainRes(_res)
    return this
}

exports.Calc =  Calc
exports.chain =  chain
exports.add = Calc.prototype.add
exports.mul = Calc.prototype.mul
exports.sub = Calc.prototype.sub
exports.div = Calc.prototype.div
exports.adds = Calc.prototype.adds
exports.subs = Calc.prototype.subs
exports.muls = Calc.prototype.muls
exports.divs = Calc.prototype.divs