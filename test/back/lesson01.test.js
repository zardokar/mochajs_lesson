const assert = require('assert')

const TARGET = require('../../lib/lesson01')


describe('Test Case Function 01', function() {
    it('Run simple function', function() {
        assert.equal(true, TARGET.runAwesomeFunction())
    })

    it('This function must return boolean type', function() {
        assert.equal(true, typeof TARGET.runAwesomeFunction() === 'boolean' )
    })
})