function checkEven(arr) {
    if (arr.length === 0) {
        return 0
    }
    // start from first element of array
    // if (arr[0] % 2 === 0) {
    //     return arr[0]
    // }
    // arr.shift()

    // start from last element of the array
    if (arr[arr.length - 1] % 2 === 0) {
        return arr[arr.length - 1]
    }
    arr.pop()
    return checkEven(arr)
}

const arr = [13, 2, 23, 54, 45, 43, 56, 34,12, 423, 545];

// simple for loop to find even number
// for (const i of arr) {

//     if (i % 2 === 0) {
//     console.log(i);
//     break
// }
// }
