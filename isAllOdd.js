"use strict";
//Write a recursive function to determine whether all digits of the number are odd or not.

// 1 (Naive version)
function isAllOdd(num) {
  return [...String(num)].every(el => Number(el) % 2);
}

console.log(isAllOdd(6111));  // false
console.log(isAllOdd(35791)); // true

// 2 (Recursive version)

function isAllOddRecursive(num) {
  let lastDigit = num % 10;

  if(!(lastDigit % 2)) {
    return false;
  }

  num = (num - lastDigit) / 10;

  if(num < 10) {
    return (!(num % 2));
  }

  return isAllOddRecursive(num);
}

console.log(isAllOdd(6111));  // false
console.log(isAllOdd(35791)); // true