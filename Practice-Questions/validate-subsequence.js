// Given two array of integers first is long array and second one is sub array,
// return true is first array contain all items of sub array in the same sequence,
// otherwise return false

function validateSubsequence(array, sequence) {
    let seqIndex = 0;

    for (const value of array) {
        if (seqIndex === sequence.length) break
        if (sequence[seqIndex] === value) seqIndex++
    }

    return seqIndex === sequence.length
}

console.log(validateSubsequence([3,2,5,6,2,1,5], [2,3,6,1]));
