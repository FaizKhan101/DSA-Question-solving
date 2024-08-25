// find factors of a number

const findFactors = (num) => {
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            console.log(i);
        }
    }
    return "Completed"
}

console.log(findFactors(100));