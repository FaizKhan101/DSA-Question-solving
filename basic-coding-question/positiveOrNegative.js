function positiveOrNegative(num) {
    if (num > 0) {
        return "Given number is positive."
    } else if (num < 0) {
        return "Given number is negative."
    } 
    return "Zero"
}

console.log(positiveOrNegative(0));