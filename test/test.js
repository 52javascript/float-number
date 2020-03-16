const {Calc} = require ('../src/index')
const {add} = require ('../src/index')

// const obj = new Calc({
//     fixed: 2
// })
// let a = obj.add(0.1, '2.03', {fixed: 4})
let b = Calc.prototype.add(0.1, 0.2, {returnString: true})
let c = Calc.prototype.del(-0.1, 0.2, {returnString: true})
let d = Calc.prototype.mul(1.5, 2.299, {returnString: true})
let e = Calc.prototype.div(8.8888, -1.1111, {returnString: true})
// console.log(a)
// console.log(b)
// console.log(c)
console.log(d)
console.log(e)
