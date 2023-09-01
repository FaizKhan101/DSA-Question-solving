// self solution

// function isAnagram(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     }

//     const firstStr = {}
//     const secondStr = {}

//     for (let char of str1) {
//         firstStr[char] = ++firstStr[char] || 1
//     }
//     for (let char of str2) {
//         secondStr[char] = ++secondStr[char] || 1
//     }

//     for (let key in firstStr) {
//         if (!(key in secondStr)) {
//             return false;
//         }
//         if (secondStr[key] !== firstStr[key]) {
//             return false
//         }

//     }
//     return true
// }

// console.log(isAnagram('pure', 'rwpe'));


// Instructor solution

// function validAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   const lookup = {}

//   for ( let i = 0; i < str1.length; i++) {
//     let letter = str1[i]

//     lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
//   }

//   console.log(lookup);

//   for ( let i = 0; i < str2.length; i++) {
//     let letter = str2[i]

//     if (!lookup[letter]) {
//         return false;
//     } else {
//         lookup[letter] -= 1
//     }
//   }
//   console.log(lookup);
//   return true;
// }

// console.log(validAnagram('cinema', 'iceman'));