const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Implements function with an object and a value

const bestTVShowsByGenre = {
  sci_fi:  "THe Expanse",
  comedy:  "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(object, value) {
  
// for (const key of Object.keys(object))

  for (const key in object) {
    if (object[key] === value) {
  return key;
    }
  };
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That `70s Show"), undefined);