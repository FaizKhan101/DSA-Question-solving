// Find the Prime Numbers in a Given Range

// Example
// Input : low = 2 , high = 10
// Output : 2 3 5 7

function primeInRange(low, high) {
  const primes = [];
  for (let num = low; num <= high; num++) {
    let isPrime = true;
    if (num < 2) {
      isPrime = false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(num);
    }
  }
  return primes;
}

console.log(primeInRange(2,10));
