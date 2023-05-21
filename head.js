//head function implementation

const assertEqual = function(a,b) {
  if (a === b) {
    console.log('✅✅✅Assertion Passed: ' + [a] + ' === ' + [b]);
  } else {
    console.log('🛑🛑🛑Assertion Failed:' + [a] + ' !==' + [b]);
  }
};

const head = function(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
};

//test code
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");