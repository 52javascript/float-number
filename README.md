# float-number

###### 一段解决浮点数计算的工具代码

js计算中常见的 0.1 + 0.2 = 0.30000000000000004

为了解决上面这个蛋疼的问题，此工具应运而生

### 支持方法列表

配置项名称 | 参数值 | 说明
---|---|---
add | add(a, b, options) | 简单加法, a或者b可以为数字或能转为number类型的字符串， option为object类型，具体参考下文配置项，下同
sub | sub(a, b, options) | 简单减法
mul | mul(a, b, options) | 简单乘法
div | div(a, b, options) | 简单除法

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

### 配置项


配置项名称 | 默认值 | 说明
---|---|---
fixed | -1 | 结果值保留几位小数， -1代表原样返回
returnString | false | 是否返回String类型，默认返回Number

当然，这个工具也支持全局配置

    const {Calc} = require('float-number')
    
    const _fn = new Calc({
        fixed: 4 // 全局保留两位小数
    })
    add(0.1, 0.2) // 0.3000
    _fn.add(0.1, 0.2)  // 0.3000
    
如果你在具体方法中写的配置项会覆盖全局配置

    const {Calc, add} = require('float-number')
    
    const _fn = new Calc({
        fixed: 4 // 全局保留两位小数
    })
    
    add(0.1, 0.2, {
        fixed: 2
    })  // 0.30
    
至此，你应该发现了，任何方法都会有两种使用方法

    const {Calc, add} = require('float-number')
    
    const _fn = new Calc({
        fixed: 4 // 全局保留两位小数
    })
    
    例子1
    add(0.1, 0.2, {
        fixed: 2
    })  
    // 0.30
    
    例子2.
    _fn.add(0.1, 0.2)
    // 0.3000
    
这两种方法在代码实现内部并没有什么区别，当使用构造函数创建的对象时， 只是会额外做一些全局的操作，比如上面的全局配置项等等。之所以这么做，是为了简单化复杂度，因为很多情况下我们只需要一个简单的 a + b, 为了提升这个使用的开发体验感，作者特意暴露了例子1这样的简单的加减乘除操作。

