const assert = require('assert')

const {mul} = require('../dist/float-number.min')

describe('test_mul', function () {
    it('base', function () { // 简单加法
        assert.strictEqual(mul(0.1, 0.2), 0.02)
    })

    it('baseWithConstructor', function () {
        assert.strictEqual(mul(0.55, 0.14), 0.077)
    })

    it('fixed', function () { // 测试fixed
        assert.strictEqual(mul(0.1, 0.2, {fixed: 3}), '0.020')
    })

    it('returnString', function () { // 测试returnString
        assert.strictEqual(mul(0.2, 0.2, {returnString: true}), '0.04')
    })
})