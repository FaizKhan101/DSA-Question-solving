// Checking Whether the Number is Harshad or not

// A Number that is divisible by the sum of it's digits is known as a Harshad number.

const isHarshadNumber = (num) => {
  const arr = String(num).split("");
  const sum = arr.reduce((acc, cur) => {
    return +acc + +cur;
  });
  return num % sum === 0;
};

console.log(isHarshadNumber(21));
