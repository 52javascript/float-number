const assert = require('assert')

const {adds, subs, muls, divs} = require('../dist/float-number.min')

describe('test_total', function () {
    it('adds', function () { // 累计加法
        assert.strictEqual(adds([0.55, 0.14, 0.3], {fixed: 6}), '0.990000')
    })
    it('subs', function () { // 累计减法
        assert.strictEqual(subs([0.1, 0.2, 0.3]), -0.4)
    })
    it('muls', function () { // 累计乘法
        assert.strictEqual(muls([0.1, 0.2, 0.3]), 0.006)
    })
    it('divs', function () { // 累计除法
        assert.strictEqual(divs([0.1, 0.2, 0.5]), 1)
    })
})