// Write a function that returns the largest number in a given array.

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