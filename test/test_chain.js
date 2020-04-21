const assert = require('assert')

const {chain} = require('../dist/float-number.min')

describe('test_chain', function () {
    it('chain', function () { // 累计加法
        assert.strictEqual(
            chain(0.1)
                .cAdd(6)
                .cDiv(2)
                .cSub(1.051)
                .cMul(2.03)
                .val(),
            4.05797
        )
    })
})
