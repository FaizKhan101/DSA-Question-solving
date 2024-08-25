// Find the Prime Factors of a Number

const primeFactorOfNum = (num) => {
    const factors = [];
    let divisor = 2;

    while (num > 1) {
        if (num % divisor === 0) {
            factors.push(divisor);
            num /= divisor;
        } else {
            divisor++;
        }
    }

    return factors;
}

console.log(primeFactorOfNum2(210));