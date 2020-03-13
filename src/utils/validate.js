module.exports = {
    // 校验参数是否为数字
    mergeArgumentsIsNumber: function(arr) {
        const _arr = []
        try {
            // 去除最后一个参数精度
            for (let i = 0; i < arr.length - 1; i++) {
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
        console.log('_arr', _arr)
        return _arr
    },
    isPosNumber: function (number) { // 是否是0和正整数
        return /^(0|\+?[1-9][0-9]*)$/.test(number)
    }
}