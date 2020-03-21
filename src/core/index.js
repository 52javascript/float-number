const {
    packResult
} = require('../utils/utils')

const _core = {
    _add: function(a, b, options) {
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
        return packResult(res, options)
    },
    /**
     * 累计运算
     * @param arr 带计算的数组
     * @param key 带计算的方法
     * @param options
     * @returns {string|Number}
     * @private
     */
    _total: function(arr, key, options) {
        let res = arr[0]
        const len = arr.length
        for (let j = 1; j < len; j++) {
            if (key === '_sub') {
                res= _core._add(res, -arr[j], {...options, ...{returnOrigin: true}})
            } else {
                res= _core[key](res, arr[j], {...options, ...{returnOrigin: true}})
            }
        }
        return packResult(res, options)
    },
    _mul: function (a, b, options){
        let _base = 0
        try {
            _base += a.toString().split(".")[1].length
        } catch (e) {
        }
        try {
            _base += b.toString().split(".")[1].length
        } catch (e) {
        }
        const r1 = Number(a.toString().replace(".",""))
        const r2 = Number(b.toString().replace(".",""))
        const res = (r1 * r2) /Math.pow(10, _base)
        return packResult(res, options)
    },
    _div: function (a, b, options){
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
        return packResult(res, options)   //---整数相除 在乘上10的平方  小数点的长度
    }
}

module.exports = _core
