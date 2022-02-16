"use strict";

/* Given an array of nested arrays. Write a recursive function that flattens it. (Hint create
function that concat arrays). */

function flattenArray(arr) {
    let flattenArr = [];

    arr.forEach(el => {
      if(Array.isArray(el)){
        const result = flattenArray(el);

        result.forEach(el => flattenArr.push(el));
      } else {
        flattenArr.push(el);
      }
    });

    return flattenArr;
}

console.log(flattenArray([1, [3, 4, [1, 2]], 10]));      // [1, 3, 4, 1, 2, 10]
console.log(flattenArray([14, [1, [[[3, []]], 1], 0]])); // [14, 1, 3, 1, 0]