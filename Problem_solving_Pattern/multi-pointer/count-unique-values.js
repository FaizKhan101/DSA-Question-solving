// Count all unique values fomr array

function countUnique(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let i = 0
    for (let j = 1; j < sortedArr.length; j++) {
        if (sortedArr[i] < sortedArr[j]) {
            i++; 
            sortedArr[i] = sortedArr[j]  
        }; 
    }
    return i + 1
}

console.log(countUnique([1,1,1,2,3,4,4,5,5,6,6,7,8,9,9]));