const {
    packResult
} = require('../utils/utils')

module.exports = {
    _add: function(a, b) {
        let _a, _b
        try {
            _a = (a.toString().split('.')[1] || '').length
        } catch (e) {
            _a = 0
        }
        try {
            _b = (b.toString().split('.')[1] || '').length
        } catch (e) {
            _b = 0
        }
        const _base = Math.pow(10, Math.max(_a, _b))
        const res = (a * _base + b * _base) / _base
        return packResult(res, this._options)
    }
}