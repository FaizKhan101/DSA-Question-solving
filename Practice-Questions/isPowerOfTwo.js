// Code

// Testcase
// Testcase
// Result

// 231. Power of Two
// Solved
// Easy
// Topics
// Companies
// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16

// Solution

function isPowerOfTwo(n) {
  for (let i = 0; i <= n / 2; i++) {
    if (2 ** i > n);
    if (2 ** i === n) return true;
  }
  return false;
}

console.log(isPowerOfTwo(16)); // true
