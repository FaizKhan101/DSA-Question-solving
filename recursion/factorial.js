// Write function for find factorial
// factorial(5) => 5 * 4 * 3 * 2 * 1

function factorial(num) {
    if (num <= 0) {
        return 1;
    }
    return num * factorial(num - 1)
}

let target = 5
console.log(`The factorial of ${target} is: ${factorial(5)}`);
