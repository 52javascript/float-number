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
    this.mmp = 9
    this._options = mergeOptions(options)
    /**
     * 两个数的加法
     * @param a
     * @param b
     * @param fixed 保留几位小数
     * @returns {*}
     */
    this.add = function (a, b, fixed = 0) {
        const _arguments = mergeArgumentsIsNumber([...arguments])
        return _add.call(this, _arguments[0], _arguments[1])
    }
}

module.exports =  Calc