// function romanToInt(s) {
//     hashMap = {'I'             :1,
//         'V'            : 5,
//         'X'            : 10,
//         'L'            : 50,
//         'C'            : 100,
//         'D'            : 500,
//         'M'            : 1000,};

//     let val = 0;
//     for (const char of s) {
//          val += hashMap[char];

//     }

//     return val
// }

// console.log(romanToInt("CDLIV"));

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let array = 
    {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
  }
  let count = 0;
  for ( let i = 0; i < s.length; i++) {
    let currentValue = array[ s[i] ];
    console.log(currentValue);
    if ((i + 1) < s.length && array[ s[i + 1] ] > currentValue) {
      count -= currentValue;
    } else {
      count += currentValue;
    }
  }
  return count;

};
console.log(romanToInt("MCMXCIV"));


