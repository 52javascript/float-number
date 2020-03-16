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
    },
    _mul: function (a, b){
        let _base = 0
        try {
            _base = a.toString().split(".")[1].length
        } catch (e) {
        }
        try {
            _base = b.toString().split(".")[1].length
        } catch (e) {
        }
        const r1 = Number(a.toString().replace(".",""))
        const r2 = Number(b.toString().replace(".",""))
        const res = (r1 * r2) /Math.pow(10, _base)
        return packResult(res, this._options)
    },
    _div: function (a, b){
        let t1, t2
        try {
            t1 = a.toString().split(".")[1].length
        } catch (e) {
        }   //--小数点后的长度
        try {
            t2 = b.toString().split(".")[1].length
        } catch (e) {
        }  //--小数点后的长度
        const r1 = Number(a.toString().replace(".",""))  //--去除小数点变整数
        const r2 = Number(b.toString().replace(".",""))  //--去除小数点变整数
        const res = (r1 / r2) * Math.pow(10,t2-t1)
        return packResult(res, this._options)   //---整数相除 在乘上10的平方  小数点的长度
    }
}
