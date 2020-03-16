const {
    mergeArgumentsIsNumber
} = require('./utils/validate')

const {
    mergeOptions
} = require('./utils/utils')

const {
    _add
} = require('./core')

function Calc (options) {
    console.log('执行力了构造函数')
    this.prototype._base = this
    this._options = mergeOptions(options) // 合并配置项
}

/**
     * 两个数的加法
     * @param a
     * @param b
     * @param fixed 保留几位小数
     * @returns {*}
     */
    
Calc.prototype.add = function (a, b, options = {}) {
    // console.log(this._base)
    this._options = mergeOptions(options)
    const _arguments = mergeArgumentsIsNumber([...arguments])
    return _add.call(this, _arguments[0], _arguments[1])
}

/**
     * 两个数的减法
     * @param a
     * @param b
     * @param fixed 保留几位小数
     * @returns {*}
     */
Calc.prototype.del = function (a, b, options = {}) {
    this._options = mergeOptions(options)
    const _arguments = mergeArgumentsIsNumber([...arguments])
    // 减法相当于加上b的负数
    return _add.call(this, _arguments[0], -(_arguments[1]))
}
module.exports =  Calc