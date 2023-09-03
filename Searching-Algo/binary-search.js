// Write function for find a target element from given array based on binary search algorithm

// Array = [1,3,4,5,6,8,10], Target = 6
// Output = 4

function binarySearch(arr, target) {
  if (arr.length === 0) return -1;

  arr.sort((a, b) => a - b);
  console.log(`Sorted Array: [${arr}]`);

  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (arr[mid] !== target && left <= mid) {
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
    mid = Math.floor((left + right) / 2);
  }

  return arr[mid] === target ? mid : -1
}

console.log(binarySearch([32,-1,43,-23,12,-43,2,-43,34], 12));
