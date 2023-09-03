// Write a function takes an array and find a target element into the array Based on linear Search Algorithm

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

let arr = [1, 4, 3, 6, 8, 5, 7];
let target = 8;

console.log(linearSearch(arr, target));
