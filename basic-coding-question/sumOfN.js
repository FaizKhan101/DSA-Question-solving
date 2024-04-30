// Find the Sum of The First N Natural Numbers

// Simple for loop solution
function sumOfN(num) {
  let result = 0;
  for (let i = 0; i <= num; i++) {
    result += i;
  }
  return result;
}

console.log(sumOfN(5));
// 1, 2, 3, 4, 5

// Easy recursion solution
function sumOfNRecursion(num) {
  let result = 0;
  if (num === 0) {
    return result;
  }
  return num + sumOfNRecursion(num - 1);
}

console.log(sumOfNRecursion(8));

