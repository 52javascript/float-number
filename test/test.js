const Calc = require ('../src/index')

const obj = new Calc({
    fixed: 2
})
let a = obj.add(0.1, '2.03', 2)
console.log(a)