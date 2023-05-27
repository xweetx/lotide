// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// The function should report back how many instances of each string were found in the allItems array of strings.
// Our function countOnly needs to return a proper report on all the strings found in the input array, and their respective counts. Therefore it will need to return an object that can represent the stats.

const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (let i of allItems) {
    if (itemsToCount[i]) { 
      if (result[i]) {  
        result[i]++; 
      } else {
        result[i] = 1;
      }
    }
  }
  return result;
};
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);