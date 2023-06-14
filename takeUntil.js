//got 2 parameters, array and a callback
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

module.exports = takeUntil;


