// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// The function should report back how many instances of each string were found in the allItems array of strings.
// Our function countOnly needs to return a proper report on all the strings found in the input array, and their respective counts. Therefore it will need to return an object that can represent the stats.

const countOnly = function(allItems, itemsToCount) {
  let results = {};
  for (let items of allItems) { //loop through array allItems
    if (itemsToCount[items]) { //check truthy
      if (results[items]) {
        results[items] += 1;
      } else {
        results[items] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;