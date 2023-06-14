const assertEqual = require('../assertEqual');

const map = require('../map');

const words = ['ground', 'control', 'to', 'major', 'tom'];
const expectedOutput = ['g','c','t','m','t'];

const results1 = map(words, word => word[0]);
console.log(results1);

assertEqual(results1, expectedOutput);
