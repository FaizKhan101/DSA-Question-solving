// Write a function that checks whether a given string is a palindrome (reads the same forwards and backwards).

const checkPalindrome = (str) => {
  let reverseStr = str.split("").reverse().join("");

  //   let reverseStr = "";
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     reverseStr = reverseStr + str[i];
  //   }

  if (str.toLowerCase() === reverseStr.toLowerCase()) {
    return "Given string is palindrome.";
  }
  return "Given string is not palindrome.";
};

console.log(checkPalindrome("Refer"));


// function isPalindrome2(str) {
//   const newStr = str.split('').reverse().join('')
//   return (str.toLowerCase() === newStr.toLowerCase())
// }

// console.log(isPalindrome2("RoTator"));