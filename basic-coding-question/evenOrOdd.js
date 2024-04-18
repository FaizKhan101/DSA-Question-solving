function evenOrOdd(num) {
    if (typeof(num) !== "number") {
        return "Invalid Input!"
    }
    if (num % 2 === 0) {
        return "Given number is Even."
    } else if (num % 2 !== 0) {
        return "Given number is Odd."
    }
}

console.log(evenOrOdd(3));
