const assert = require('assert')

const {runAwesomeFunction} = require('../../lib/lesson03')


describe('Test Case Function 03', function() {
    it('value must be 5 when input1 = 3 and input2 = 2', function() {
        assert.equal(5, runAwesomeFunction(3,2) )
    })

    it('value must be 5 when input1 = 2 and input2 = 3', function() {
        assert.equal(5, runAwesomeFunction(2,3) )
    })

    it('value must be false (not NaN) when input1 = undefined and input2 = undefined', function() {
        assert.equal(false, isNaN(runAwesomeFunction()) )
    })

    it('value must be 0 when input1 = undefined and input2 = undefined', function() {
        assert.equal(0, runAwesomeFunction() )
    })

    it('value must be 5 when input1 = 5 and input2 = undefined', function() {
        assert.equal(5, runAwesomeFunction(5) )
    })

    it('value must be 3 when input1 = Array Object and input2 = 3', function() {
        assert.equal(3, runAwesomeFunction([0],3) )
    })

    it('value must be 10 when input1 = JSON Object and input2 = 10', function() {
        assert.equal(10, runAwesomeFunction({'value':2},10) )
    })
})