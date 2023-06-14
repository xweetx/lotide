/*
Create a function that takes a sentence string.
For each letter in the sentence, return all the indices of that letter's occurrences in the sentence.
Final result will be an object; the indices will be an array for the corresponding letter key.
Spaces excluded in the count.
*/

const letterPositions = function(sentence) {
  const results = [];

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {

      if (!results[sentence[i]]) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }
    }
  }
  console.log(results);
  return results;
};



module.exports = letterPositions;