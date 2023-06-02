const map = function(array, callback) {
	const results = [];
	for (let item of array) {
		console.log(`item BEFORE: `, item)
		console.log(`item AFTER: `, callback(item));
		console.log(`---`);
		results.push(callback(item));
	}
	return results;
};

const words = [“ground”, “control”, “to”, “major”, “tom”]

const results1 = map(words, word) => [0]);
console.log(results);