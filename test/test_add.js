const assert = require('assert')
const {add} = require('../dist/float-number.min')
// const {add} = require('../src')

describe('test_add', function () {
    it('base', function () { // 简单加法
        assert.strictEqual(add(0.55, 0.14), 0.69)
    })

    it('fixed', function () { // 测试fixed
        assert.strictEqual(add(0.55, 0.14, {fixed: 4}), '0.6900')
    })

    it('returnString', function () { // 测试returnString
        assert.strictEqual(add(0.2, 0.2, {returnString: true}), '0.4')
    })
})