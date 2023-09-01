// Write a function which takes a string as a parameter and return a count of each character

// function isAlphaNumeric(char) {
//   let code = char.charCodeAt(0);
//   if (
//     !(code > 47 && code < 58) &&
//     !(code > 64 && code < 91) &&
//     !(code > 96 && code < 123)
//   ) {
//     return false;
//   }
//   return true;
// }

// function charCount(str) {
//   let result = {};
//   for (let char of str) {
//     if (isAlphaNumeric(char)) {
//       char = char.toLowerCase();
//       result[char] = ++result[char] || 1;
//     }
//   }
//   return result;
// }

// console.log(charCount("Hello  3232@3hi"));

function isAlphaNumeric(char) {
  const code = char.charCodeAt();
  console.log({code});
  return (code > 96 && code < 123) || (code > 47 && code < 58);
}

function charCount(str) {
  const obj = {};
  const lowerStr = str.toLowerCase();
  console.log(lowerStr);
  for (const char of lowerStr) {
    if (isAlphaNumeric(char)) {
      obj[char] = ++obj[char] || 1
    }
  }
  return obj;
}

console.log(charCount('Hello'));
