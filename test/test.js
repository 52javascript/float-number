const Calc = require ('../src/index')

const obj = new Calc({
    // fixed: 2
})
let a = obj.add(0.1, 0.2, 2)
console.log(a)