const findKeyByValue = require('../findKeyByValue');
const assertEqual = require('../assertEqual');


const bestTVShowsByGenre = {
  scifi:  "THe Expanse",
  comedy:  "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That `70s Show"), undefined);
