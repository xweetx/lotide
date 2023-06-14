const findKey = function(obj, callback) {
  const theKeysToLookThrough = Object.keys(obj);
  for (const key of theKeysToLookThrough) {
    let thingToTest = obj[key];
    if (callback(thingToTest) === true) {
      console.log('Found the key 😀', key);
      return key;
    } else {
      console.log('This is not they key 😩:', key, obj[key], callback(obj[key]));
    }
  }
};
module.exports = findKey;
