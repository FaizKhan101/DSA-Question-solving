// Naive solution
// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false
//     }
//     for ( let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if (correctIndex === -1) {
//             return false
//         }
//         console.log(arr2);
//         arr2.splice(correctIndex, 1)
//     }
//     return true
// }

// arr1 = [1,2,3]
// arr2 = [4,1,9]
// console.log(same(arr1, arr2));


// refactor Solution O(n)

function same(arr1, arr2) {
    if (arr1.length !== arr2.length){
        return false;
    }

    const frequencyCounter1 = {}
    const frequencyCounter2 = {}

    for (let val of arr1) {
        frequencyCounter1[val] = ++frequencyCounter1[val] || 1
    }

    for (let val of arr2) {
        frequencyCounter2[val] = ++frequencyCounter2[val] || 1
    }

    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    for (let key in frequencyCounter1 ) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    } 
    return true;
}

arr1 = [1,2,3,4]
arr2 = [4,16,1,9]

console.log(same(arr1, arr2));