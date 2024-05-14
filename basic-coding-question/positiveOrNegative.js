// Check given number for positive and negative.

function positiveOrNegative(num) {
    if (num > 0) {
        return "Given number is positive."
    } else if (num < 0) {
        return "Given number is negative."
    } 
    return "Zero"
}

console.log(positiveOrNegative(0));


// Short version of given problem
function positiveOrNegative2(num) {
    return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero"
}

console.log(positiveOrNegative2(4));