# float-number（2.0.0）

bugfixed: 解决issue2

###### 一段解决浮点数计算的工具代码

js计算中常见的 0.1 + 0.2 = 0.30000000000000004

为了解决上面这个蛋疼的问题，此工具应运而生

### 运行环境

只要支持js的环境都支持,工具内部已转码为es5,无需担心兼容性

### 支持方法列表

配置项名称 | 参数值 | 说明
---|---|---
add | add(a, b, options) | 简单加法, a或者b可以为数字或能转为number类型的字符串， option为object类型，具体参考下文配置项，下同
sub | sub(a, b, options) | 简单减法
mul | mul(a, b, options) | 简单乘法
div | div(a, b, options) | 简单除法
adds | adds([a,b,c...], options) | 累计运算加法
subs | subs([a,b,c...], options) | 累计运算减法
muls | muls([a,b,c...], options) | 累计运算乘法
divs | divs([a,b,c...], options) | 累计运算加法
chain | 详细看下文demo | 链式调用(无优先级)
注意：如果传入的参数不合法，会抛出警告

### 使用方法

    npm install float-number --save
    
    yarn add float-number

##### 简单加减乘除, 以加法为例

    const {add, sub} = require('float-number')

    add(0.2, 0.1)  // 0.3
    
在vue或react中使用
    
    <template>
        <div>{{add(0.1, 0.2)}}</div>
    </template>
    
    const {add} = require('float-number')
    或者：
    import {add} from 'float-number'
    
    export default {
        name: 'foo',
        data() {
            return {
                add
            }
        }
    }
    
你不用担心传入的参数的合法性，在工具内部都有进行转换，并且支持传入配置项

    const {add,del} = require('float-number')

    add(0.2, 0.1, {fixed: 2})  // 0.30  结果保留两位小数
    
##### 累计加减乘除, 以加法为例
 
   const {adds} = require('float-number')

    adds([0.2, 0.1, 0.3])  // 0.6
    adds([0.2, 0.1, 0.3], {fixed: 2})  // '0.60'

##### 链式调用（综合运算）, 注意，这没有运算符优先级

    const {chain} = require('float-number.min')
    chain(0.1) // 初始值0.1
            .cAdd(6) // 加6
            .cDiv(2) // 除2
            .cSub(1.051) // 减1.051
            .cMul(2.03) //乘2.03
            .val()  // 4.05797
    chain(0.1)
        .cAdd(6)
        .cDiv(2)
        .cSub(1.051)
        .cMul(2.03)
        .val({fixed: 2})  // '4.06'
 
### 配置项

配置项名称 | 默认值 | 说明
---|---|---
fixed | -1 | 结果值保留几位小数， -1代表原样返回
returnString | false | 是否返回String类型，默认返回Number
    


