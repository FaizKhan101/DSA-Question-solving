// Write a function for findind fibonacci number.

function fibonacci(num) {
  if (num === 0) return 0;
  else if (num === 1) return 1;
  else return fibonacci(num - 1) + fibonacci(num - 2);
} 

// just return final number
console.log(fibonacci(20));

// for complete list of fibonacci
// let target = 20;
// let fibArray = [];
// for (let i = 0; i <= target; i++) {
//   fibArray.push(fibonacci(i));
// }

// console.log(fibArray);

// 0,1,1,2,3,5,8,13...
