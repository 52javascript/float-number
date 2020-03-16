const {Calc, add} = require ('../src/index')
console.log(Calc)
const obj = new Calc({
    fixed: 4
})
let a = obj.add(0.1, '2.03', {fixed: 4})
let b = add(0.1, -0.2, {returnString: true})
console.log(a)
console.log(b)