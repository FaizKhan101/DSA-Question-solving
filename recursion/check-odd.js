function checkOdd(arr) {
//   console.log(arr);
  if (arr.length === 0) {
    return 0;
  }
//   start from last element of array
  if (arr[arr.length - 1] % 2 !== 0) {
    return arr[arr.length - 1];
  }
  arr.pop();
//   start from first element of array
//   if (arr[0] % 2 !== 0) {
//     return arr[0];
//   }
//   arr.shift();
  return checkOdd(arr);
}

const arr = [2, 4, 6, 13, 5, 7, 56, 43, 76, 32, 2];

// simple find odd for loop solution
// for ( let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//         console.log(arr[i]);
//         break
//     }
// }
// console.log(arr[arr.length - 2]);

console.log(checkOdd(arr));

