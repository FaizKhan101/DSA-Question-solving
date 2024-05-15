// Check Whether a Number is a Prime or Not

function checkPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return "Not Prime";
    }
  }
  return "Prime";
}

console.log(checkPrime(5));