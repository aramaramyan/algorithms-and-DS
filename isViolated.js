"use strict";

/* Given an array of numbers which is almost sorted in ascending order. Find the index
where sorting order is violated. */

function isViolated(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    if(arr[i] > arr[i + 1]) {
      return i + 1;
    }
  }

  return -1;
}

console.log(isViolated([2, 12, 15, 48, 64]));       // -1
console.log(isViolated([-9, -4, -4, 3, 12, 4, 5])); // 5