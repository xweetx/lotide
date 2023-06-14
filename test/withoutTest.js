const without = require('../without');

//Test
console.log(without([1, 2, 3], [1])); // Output: [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // Output: ["1", "2"]