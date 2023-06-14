# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

*_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.*

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

*Install it:*

npm install @jasminenixon/lotide

*Require it:*

const _ = require('@jasminenixon/lotide');

*Call it:*

const results = _.tail([1, 2, 3]) // => [2, 3]

## Documentation

The following functions are currently implemented:

* `function (assertArraysEqual)`: compares two arrays if the same & will print whether the assertion(that they are equal) has passed or not.
* `function (assertEqual)`: compares two primitive values for equivalence & will print whether the assertion (that they are equal) has passed or not.
* `function (assertObjectsEqual)`: compares two objects for equivalence & will print whether the assertion (that they are equal) has passed or not.
* `function (countLetters)`: counts the number of letters in a string.
* `function (countOnly)`: Will take two arguments, the first will be an object which will specify which items need to be counted. The second will be an array of items from which only the items of interest will be counted.
* `function (eqArrays)`: compares two arrays for equivalence
* `function (eqObjects)`: Will compare two objects for equivalence
* `function (findKey)`: takes an object and will identify the key that corresponds to a value that is evaluated by a callback function(second argument).
* `function (findKeyByValue)`: takes an object and will identify the key that corresponds to a given value in a key- value pair.
* `function (flatten)`: takes an array of nested arrays, and returns an array with no nesting.
* `function (head)`: Takes an array and returns the item at index 0.
* `function (letterPositions)`: takes a string and returns an object where each letter and its position are represented as key value pairs.
* `function (map)`: Will iterate through an array, creating a new array of items in which the items of the original array are changed accrording to some function. The original array will not be mutated.
* `function (middle)`: takes an array and will return the middle item(s)
* `function (tail)`: takes an array and return another array with all items of the original except for the item at index 0.
* `function (takeUntil)`: Will iterate over an array and will return a new array which will contain all the items from the original until some condition (as defined by a function-passed as an argument) is met.
* `function (without)`: takes two arrays and will only return those items from the first array which are not found in the second array.