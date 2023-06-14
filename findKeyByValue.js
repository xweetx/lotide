//Implements function with an object and a value

const findKeyByValue = function(object, value) {
//checks object (key in object), returns first key with given value, if no value says undefined

  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};


module.exports = findKeyByValue;