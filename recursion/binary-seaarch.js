// Write a recursive function for binary search

function binarySearch(arr, target) {
  if (arr.length === 0) return false;

  arr.sort((a, b) => a - b);
  const mid = Math.floor(arr.length / 2);

  if (arr[mid] === target) return true;
  else if (arr[mid] < target) return binarySearch(arr.slice(mid + 1), target);
  else return binarySearch(arr.slice(0, mid), target);
}

let arr = [4, 3, 6, 5, 1, -5, -3, 6, -1, 12];
let target = 5;

console.log(binarySearch(arr, target)); // true