# float-number

###### 一段解决浮点数计算的工具代码

js计算中常见的 0.1 + 0.2 = 0.30000000000000004

为了解决上面这个蛋疼的问题，此工具应运而生

### 支持方法列表

配置项名称 | 参数值 | 说明
---|---|---
add | add(a, b, options) | 简单加法, a或者b可以为数字或能转为number类型的字符串， option为object类型，具体参考下文配置项，下同
del | del(a, b, options) | 简单减法

注意：如果传入的参数不合法，会抛出警告

### 使用方法

    npm install float-number --save
    
    yarn add float-number

##### 简单加减乘除, 以加法为例

    const {add,del} = require('float-number')

    add(0.2, 0.1)  // 0.3
    
你不用担心传入的参数的合法性，在工具内部都有进行转换，并且支持传入配置项

    const {add,del} = require('float-number')

    add(0.2, 0.1, {fixed: 2})  // 0.30  结果保留两位小数

### 配置项


配置项名称 | 默认值 | 说明
---|---|---
fixed | -1 | 结果值保留几位小数， -1代表原样返回
returnString | false | 是否返回String类型，默认返回Number

