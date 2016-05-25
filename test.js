var basics = require('../basics')
const chai = require('chai')
console.log('testing')
var expect = chai.expect
console.log('basics', basics)
describe('Basic JS Excercises', function () {
  describe('Array Excercise 1', function () {
    it('should be an array of length 5', function () {
      expect(basics.arr.length).to.be(5)
    })
    it('should have the values 12, 42, 36, 51, 96', function () {
      expect(basics.arr[0]).to.be(12)
      expect(basics.arr[1]).to.be(42)
      expect(basics.arr[2]).to.be(36)
      expect(basics.arr[3]).to.be(51)
      expect(basics.arr[4]).to.be(96)
    })
  })

  describe('Array Excercise 2 - findTwo', function () {
    it('should return the second number of an array', function () {
      var arr = [1, 2, 3]
      expect(basics.findTwo(arr)).to.eql(3)
    })
  })

  describe('Array Excercise 3 - Pusher', function () {
    it('should add a number to the end of an array', function () {
      var arr = [1, 2, 3]
      var pushedArray = basics.pusher(arr, 4)
      expect(pushedArray.length).to.be(4)
      expect(pushedArray[3]).to.be(4)
    })
  })

  describe('Array Excercise 4 - Upfront', function () {
    it('should add a number to the beginning of an array', function () {
      var arr = [1, 2, 3]
      var upfrontArray = basics.upfront(arr, 4)
      expect(upfrontArray.length).to.be(4)
      expect(upfrontArray[0]).to.be(4)
    })
  })

  describe('Array Excercise 5 - remover', function () {
    it('should remove a number from the beginning of an array', function () {
      var arr = [1, 2, 3]
      var removedArray = basics.remover(arr)
      expect(removedArray.length).to.be(2)
      expect(removedArray[0]).to.be(1)
      expect(removedArray[1]).to.be(2)
    })
  })

  describe('Array Excercise 7 - Copycat', function () {
    it('should copy the 3rd and the 4th index', function () {
      var arr = [1, 2, 3, 4]
      var copycatArray = basics.copyCat(arr)
      expect(copycatArray.length).to.be(2)
      expect(copycatArray[0]).to.be(1)
      expect(copycatArray[1]).to.be(2)
    })
  })

  describe('Array Excercise 8', function () {})

  describe('Array Excercise 9', function () {})

  describe('Array Excercise 10', function () {})

  describe('Array Excercise 11', function () {})

  describe('Object Excercise 1', function () {})

  describe('Object Excercise 2', function () {})

  describe('Object Excercise 3', function () {})

  describe('Object Excercise 4', function () {})

  describe('Object Excercise 5', function () {})

  describe('Object Excercise 6', function () {})

  describe('Object Excercise 7', function () {})

  describe('Intermediate Excercise 1', function () {})

  describe('Intermediate Excercise 2', function () {})

})
