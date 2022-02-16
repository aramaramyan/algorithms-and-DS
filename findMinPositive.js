"use strict";

/* Given an array of numbers. Write a recursive function to find its minimal positive
element. (if such element does not exist, return -1). */

// 1 (Naive version)

function findMinPositive(arr) {
  const filtered =  arr.filter(el => Number(el) >= 0);
  const min = Math.min(...filtered);

  return (min === Infinity)? -1 : min;
}

console.log(findMinPositive([56, -9, 87, -23, 0, -105, 55, 1])); // 0
console.log(findMinPositive([45, -9, 15, 5, -78]));              // 5
console.log(findMinPositive([-5, -9, -111, -1000, -7]));         // -1

// 2 (Recursive version)

function findMinPositiveRecursive(arr, minPositive = Infinity) {
  const newArr = [...arr];
  let minElement = minPositive;

  if (newArr.length === 0) {
    if(minElement === Infinity) {
      return -1;
    }

    return minElement;
  }

  const lastElement = newArr.pop();

  if(lastElement >= 0 && lastElement < minPositive) {
    minElement = lastElement;
  }

  return findMinPositiveRecursive(newArr, minElement);
}

console.log(findMinPositiveRecursive([56, -9, 87, -23, 0, -105, 55, 1])); // 0
console.log(findMinPositiveRecursive([45, -9, 15, 5, -78]));              // 5
console.log(findMinPositiveRecursive([-5, -9, -111, -1000, -7]));         // -1