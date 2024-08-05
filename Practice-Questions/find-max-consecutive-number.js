// Write a function that return maximum consecutive digit in a given array

function findMaxConsecutiveNum(arr) {
  let max = 1;
  let countConsecutive = 1;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      countConsecutive++;
    } else {
      countConsecutive = 1;
    }
    if (countConsecutive > max) {
      max = countConsecutive;
    }
  }
  return max;
}

console.log(findMaxConsecutiveNum([1, 2, 1, 1, 3, 3, 5, 3, 4, 4]));
