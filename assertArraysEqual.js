const eqArrays = require(`./eqArrays`);

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
    return true;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
    return false;
  }
};

// Test cases
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // Fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Pass
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Fail

module.exports = assertArraysEqual;