const countLetters = function(sentence) {
  const results = {};
  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter] === undefined) {
        results[letter] = 1;
      } else {
        results[letter] += 1;
      }
    }
  }
  console.log(results);
  return results;
};
countLetters("i am going");