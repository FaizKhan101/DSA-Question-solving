function countUniqueValues(arr) {
    const sortedArr = arr.sort();

    let i = 0
    for ( let j = 1 ; j < sortedArr.length; j++) {
        if (sortedArr[i] < sortedArr[j]) {
            i++;
            sortedArr[i] = sortedArr[j]
        }
    }

    return i + 1
}

console.log(countUniqueValues([1,1,1,2,3,,2,-1,32]));