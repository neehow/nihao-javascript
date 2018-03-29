// code snippets are put in one file just for ease of read, so there are redefinitions of variables.

// randomly sort an array
var arr = [1, 2, 3, 4, 5];
arr.sort(function() { return Math.random() - 0.5; });

// remove duplicate items from array (using ES6)
var arr = [1, 1, 2, 3, 2, 3, 3, 4, 5];
var arr2 = [...new Set(arr)];

// copy an array
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.slice();

// b raised to the power of e
var b = 2, e = 5;
var result = 2 ** 5;
