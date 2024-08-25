// Check Whether or Not the Number is a Perfect Number

// Perfect number is a positive number where sum of all it's factor equal to itself.

const isPerfectNumber = (num) => {
  const factors = [];

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  const sum = factors.reduce((acc, cur) => {
    return acc + cur;
  });

  return num === sum 
};

console.log(isPerfectNumber(6));

// without storing factors
const isPerfectNumber2 = (num) => {
    let sum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i
        }
    }
    return sum === num
}

console.log(isPerfectNumber2(7));