// Given you a array of integers return the new array in which square of all element of given array

// Example
// array = [1,2,3,4]
// output = [1,4,9,16]

// solution => 1
// O(nlogn) time || O(n) space
function sortedArraySquare1(array) {
  return array.map((value) => value ** 2);
}

console.log(
  sortedArraySquare1([1, 2, 3, 4, -1, -5, 5, 6, 7, 8]).sort((a, b) => a - b)
);


// solution => 2
// O(n) time || O(n) space
function sortedArraySquare2(array) {
    const sorterSquares = []
    for (const i of array) {
        sorterSquares.push(0)
    }
    let left = 0
    let right = array.length -1

    for (let i = array.length -1; i >= 0; i--) {
        let smallerValue = array[left]
        let largerValue = array[right]

        if (Math.abs(smallerValue) > Math.abs(largerValue)) {
            sorterSquares[i] = smallerValue ** 2
            left++
        } else {
            sorterSquares[i] = largerValue ** 2
            right--
        }
    }
    return sorterSquares
}

console.log(sortedArraySquare2([-5,-4,-2,1,2,3,5,7]));
