const assertEqual = function (a,b) {
  if (a === b) {
    console.log(`✅✅✅Assertion Passed:  ${a}  ===   ${b}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed:  ${a}  !==  ${b}`);
  }
};

//array to return back to assert equal
const tail = function(array) {
  
  if (array.length <= 1) {
    return [];

  }
  return array.slice(1);
};

//test code
assertEqual(tail([1, 2, 3]).toString(), [2, 3].toString());  // to check if the same
assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).toString(), ["Lighthouse", "Labs"].toString()); //Does not include the head part

