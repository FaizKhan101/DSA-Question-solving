function isStrong(num) {
  const arrOfNum = String(num).split("");

  const factorial = (n) => (n === 0 || n === 1 ? 1 : n * factorial(n - 1));
  let sumOfFac = 0;
  for (let i of arrOfNum) {
    sumOfFac += factorial(+i);
  }
  if (sumOfFac === num) {
    return true;
  }
  return false;
}

console.log(isStrong(45));


// Second solution => hard to understand little bit
function isStrong(num) {
    const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
    const sumOfFac = String(num).split("")
      .reduce((sum, digit) => sum + factorial(+digit), 0);
    return sumOfFac === num;
  }
  
  console.log(isStrong(145) ? "Number is strong." : "Number is not strong.");