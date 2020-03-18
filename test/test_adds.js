const assert = require('assert')

const {adds} = require('../dist/float-number.min')

describe('test_adds', function () {
    it('base', function () { // 简单加法
        assert.strictEqual(adds([0.1, 0.2, 0.3], {fixed: 6}), '0.600000')
    })
})