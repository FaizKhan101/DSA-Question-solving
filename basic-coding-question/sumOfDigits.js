// Find the sum of the Digits of a Number

// Example
// Input : number = 123
// Output : 6

function sumOfDigits(num) {
  const str = num.toString();
  let result = 0;

  for (let i = 0; i <= str.length - 1; i++) {
    result += +str[i];
  }

  return result;
}

console.log(sumOfDigits(123));
