function sumZero(arr) {
    let sortedArr = arr.sort((a, b) => a - b)
    let left = 0;
    let right = sortedArr.length - 1

    while (left < right) {
        let sum = sortedArr[left] + sortedArr[right];
        console.log(sum);
        if (sum === 0) return [ sortedArr[left], sortedArr[right] ]
        else if (sum > 0) right--;
        else left++;
    }

    return -1
}

console.log(sumZero([-6,-4,-2,-1,0,2,3,4,5,6,7]));
