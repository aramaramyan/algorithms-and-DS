"use strict";

/* Given an array. Write a recursive function that removes the first element and returns the
given array. (without using arr.shift()) */

function removeFirstElem(arr, i = 0) {

  if(arr.length === i) {
    arr.pop();
    return arr;
  }

  arr[i] = arr[i + 1];
  i++;

  return removeFirstElem(arr, i);
}

console.log(removeFirstElem([6, 78, "n", 0, 1])); // [78, "n", 0, 1]
console.log(removeFirstElem([5]));                // []
console.log(removeFirstElem([]));                 // []