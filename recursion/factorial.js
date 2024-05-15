// Write function for find factorial
// factorial(5) => 5 * 4 * 3 * 2 * 1

function factorialByRec(num) {
    if (num <= 0) {
        return 1;
    }
    return num * factorialByRec(num - 1)
}

let target = 5
console.log(`The factorial of ${target} is: ${factorialByRec(5)}`);
// result will be: 5 * 4 * 3 * 2 * 1
