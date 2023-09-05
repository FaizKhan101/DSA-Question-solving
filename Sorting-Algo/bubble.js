// // Write a function based on bubble sort algorithm for sort a given array

// // Time complexity
// // best => O(n),  average => O(n^2), worst => O(n^2)

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {

    let noSwap = true;

    for (let j = 0; j < i - 1; j++) {

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        noSwap = false;
      }
    }
    if (noSwap) break;
  }

  return arr;
}

console.log(bubbleSort([3, 2, 5,-2, 4, 6, 7, 1]));

