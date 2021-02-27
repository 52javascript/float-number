var {isDebug} = require('../config')

const _console = {
    log: function () {
        if (isDebug) {
            console.log([...arguments])
        } else {
            //
        }
    }
}

module.exports = _console