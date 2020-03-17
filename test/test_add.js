const assert = require('assert')

const {add} = require('../dist/float-number.min')

describe('test_add', function () {
    it('base', function () { // 简单加法
        assert.strictEqual(add(0.1, 0.2), 0.3)
    })

    it('fixed', function () { // 测试fixed
        assert.strictEqual(add(0.1, 0.2, {fixed: 4}), '0.3000')
    })

    it('returnString', function () { // 测试returnString
        assert.strictEqual(add(0.2, 0.2, {returnString: true}), '0.4')
    })
})