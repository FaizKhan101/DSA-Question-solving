// Write function which takes an array and return sum of all element in the array

function sumOfArray(arr) {
    if (arr.length === 0) return 0;
    let lastElement = arr[arr.length-1]
    arr.pop()
    return lastElement + sumOfArray(arr)
}

let result = sumOfArray([1,2,3,4,5])
console.log(result);

// ...5 + 4 + 3 + 2 + 1 + 0
