"use strict";

/* Given an array and a number N. Write a recursive function that rotates an array N
places to the left. (Hint: to add element to the beginning use arr.unshift()) */

function rotateArray(arr, n) {
  if(n === 0) {
    return arr;
  }

  if(n < 0) {
    const lastElem = arr.pop();

    arr.unshift(lastElem);

    return rotateArray(arr, n + 1);
  }

  const firstElem = arr.shift();

  arr.push(firstElem);

  return rotateArray(arr, n - 1);
}

console.log(rotateArray(["a", "b", "c", "d", "e", "f", "g", "h"], 3));  // ["d", "e", "f", "g", "h", "a", "b", "c"]
console.log(rotateArray(["a", "b", "c", "d", "e", "f", "g", "h"], -2)); // ["g", "h", "a", "b", "c", "d", "e", "f"]