"use strict";

/* Given a number. Write a function that calculates its sum of the digits and if that sum has
more than 1 digit find the sum of digits of that number. Repeat that process if needed
and return the result. */

function sumOfDigits(num) {
  if(num < 0) {
    return "The argument of function must be a positive integer!"
  }

  const sum = [...String(num)].reduce((aggr, val) => aggr + Number(val), 0);

  if(sum > 10) {
    let counter = 0;

    [...String(num)].forEach(() => counter++);

    return counter;
  }

  return sum;
}

console.log(sumOfDigits(5));         // 5
console.log(sumOfDigits(29));        // 2
console.log(sumOfDigits(999999999)); // 9
