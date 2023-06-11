// const tail = require('../tail');

const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const head   = require('../head');
const tail = function(arr){
    if (arr.length < 2) {
        return arr;
    } else {
    return arr.slice(4);
    }   
}
console.log(tail([1,2,3,4,5]))
module.exports = tail;

it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });