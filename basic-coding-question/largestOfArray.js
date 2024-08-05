// Write a function that returns the largest number in a given array.

// Simple solution - 1
function largestOfArray(arr) {
    let largest = 0;

    for (const i of arr) {
        if (i > largest) {
            largest = i
        }
    }
    return largest
}
console.log(largestOfArray([2,4,5,2,1,6,9,2,4,5]));

function largestOfArray2(arr) {
    if (arr.length === 0) return undefined
    return Math.max(...arr)
}

console.log(largestOfArray2([2,4,5,2,1,6,9,2,4,5]));

