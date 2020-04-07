const {_console} = require('./utils')

module.exports = {
    /**
     * 校验参数计算参数是否合法
     * @param arr
     * @param isMergeTotal 是否是累计运算
     * @returns {[]|*[]}
     */
    mergeArgumentsIsNumber: function (arr, isMergeTotal) {
        if (!Array.isArray(arr)) {
            console.error('入参不合法')
            return []
        }
        const _arr = []
        const len = isMergeTotal === true ? arr.length : 2
        try {
            // 去除最后一个参数精度
            for (let i = 0; i < len; i++) {
                const _item = arr[i]
                if (typeof _item === 'number') {
                    _arr.push(arr[i])
                } else if (typeof _item === 'string') { // 有一些猪一样的后台喜欢把数字反成字符串
                    const _temp = Number(arr[i])
                    if (isNaN(_temp)) {
                        console.error('字符串转换数字失败，转换结果魏NaN')
                    } else {
                        _arr.push(Number(arr[i]))
                    }
                } else {
                    console.error(`illegal arguments at position ${i}, because of ${_item} is not string or number`)
                    return []
                }
            }
        } catch (e) {
            console.error('参数解析报错', e)
        }
        _console.log('_arr', _arr)
        return _arr
    },
    isPosNumber: function (number) { // 是否是0和正整数
        return /^(0|\+?[1-9][0-9]*)$/.test(number)
    },
    isEmptyObject: function (obj) {
        for (let key in obj) {
            return false;
        }
        return true;
    }
}