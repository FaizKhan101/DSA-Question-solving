// Write a function that takes an array of numbers and returns the sum of the elements.

// Simple for loop solution
function sumOfArray(arr) {
  let result = 0;

  for (const i of arr) {
    result += i;
  }
  return result;
}

console.log(sumOfArray([1, 2, 3, 4, 5, 6]));

// Solution by  use of reduce a built in array function
function sumOfArray2(arr) {
  return arr.reduce((acc, curr) => {
    return acc + curr;
  });
}

console.log(sumOfArray2([1, 2, 3, 4, 5]));
