// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
const assertEqual = require('./assertEqual');

const tail = function(array) {
  if (array.length <= 1) {
    return [];
  }
  return array.slice(1);
};


assertEqual(tail([1, 2, 3]).toString(), [2, 3].toString());
assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).toString(), ["Lighthouse", "Labs"].toString());

module.exports = tail;


