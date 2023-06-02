const takeUntil = function(array, callback) {
  let final = [];
  for (const item of array) {
    if (callback(item)) {
      break;
    } else {
      final.push(item);
    }
  }
  return final;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
console.log(takeUntil(data1, x => x < 0));

console.log(`---`);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
console.log(takeUntil(data2, x => x === ','));
