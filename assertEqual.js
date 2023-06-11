// FUNCTION IMPLEMENTATION

console.assert(1 === 1); // => nothing happens because true


const assertEqual = function(actual,expected) {
  if (actual === expected)
    console.log('✅✅✅Assertion Passed: ' + [actual] + ' === ' + [expected]);
  else if (actual !== expected)
    console.log('🛑🛑🛑Assertion Failed:' + [actual] + ' !==' + [expected]);
};

//TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

module.exports = assertEqual;