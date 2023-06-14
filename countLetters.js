//counts and tells the number of each letter in a string
const countLetters = function(string) {
  //return a count on each letters
  const object = {};
  for (const letter of string) {

    if (letter !== ' ') { // Filters spaces in the string
      if (object[letter]) { // if any letter has been counted, 1 is added to the count.
        object[letter] = object[letter] += 1;
      } else { // If the letter does not exist in the result object, creates it
        object[letter] = 1;
      }
    }
  }
  return object;
};


module.exports = countLetters;