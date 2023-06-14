const assertArraysEqual = require(`../assertArraysEqual`);

const letterPositions = require('../letterPositions');

const assertTest1 = letterPositions('hello');


assertArraysEqual(assertTest1['h'], [0]); // => true
assertArraysEqual(assertTest1['e'], [1]); // => true
assertArraysEqual(assertTest1['l'], [2, 3]); // => true
assertArraysEqual(assertTest1['o'], [4]); // => false