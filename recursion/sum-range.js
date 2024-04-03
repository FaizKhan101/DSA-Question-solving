function sumRange(num) {
    if (num === 1) return 1 
    return num + sumRange(num - 1)
}

const num = 5

console.log(sumRange(num));

// simple for loop to find sum of range
// let result = 0
// for (let i = 1; i <= num; i++) {
//     result += i   
// }
// console.log(result);
