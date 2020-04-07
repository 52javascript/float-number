module.exports.config = {
    fixed: -1, // 保留的精度
    returnString: false, // 是否返回string类型的结果
    __returnOrigin: false // 是否不包装直接返回
}

module.exports.__key = ['add', 'del']

module.exports.isDebug = true