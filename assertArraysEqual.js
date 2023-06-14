
const eqArrays = require(`./eqArrays`);
//takes in 2 arrays and console.logs appropriate messages to the console.

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
    return true;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
    return false;
  }
};



module.exports = assertArraysEqual;