// Count all character in given string

// helper function for check is string or number
function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  return (code > 96 && code < 123) || (code > 45 && code < 58);
}

// main function for count each character

function charCount(str) {
  freqCounter = {};
  let lowerStr = str.toLowerCase();
  for (char of lowerStr) {
    if (isAlphaNumeric(char)) {
      if (freqCounter[char]) freqCounter[char]++;
      else freqCounter[char] = 1;
    }
  }
  return freqCounter;
}

console.log(charCount("Hello hii"));
