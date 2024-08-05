// Find the Sum of Numbers in a given Range

function sumOfRange(num1, num2) {
    let total = 0;
    for (let i = num1; i <= num2; i++) {
        total += i
    }
    return total
}

console.log(sumOfRange(1,5));