// Fing Missing Number in array of Numbers

const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1][45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32, 4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34, 30, 25, 47, 0, 31, 42, 24, 10, 14]

var missingNumber = function (nums) {
    const newArr = nums.sort((a,b) => a-b)
    for (let i = 0; i <= newArr[newArr.length - 1]; i++) {
        if (i !== newArr[i]) {
            return i
        }
    }
    return newArr.length
};

console.log(missingNumber(nums));