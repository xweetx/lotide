// FUNCTION IMPLEMENTATION

const assertEqual = function (a,b) {
  if (a === b)
    console.log('✅✅✅Assertion Passed: '+ [a] + ' === ' + [b]);
    else if (a !== b)
      console.log('🛑🛑🛑Assertion Failed:' + [a] + ' !==' + [b]);
};

//TEST CODE
assertEqual ("Lighthouse Labs", "Bootcamp");
assertEqual (1, 1);

