//without returns a subset of a given array, remove unncessary elements

const isElementInArray = function(array, element) {
  return array.includes(element);
};

const without = function(source, itemsToRemove) {
  const subset = [];

  for (let i = 0; i < source.length; i++) {
    if (!isElementInArray(itemsToRemove, source[i])) {
      subset.push(source[i]);
    }
  }

  return subset;
};


module.exports = without;