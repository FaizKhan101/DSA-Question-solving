// Write a function that takes a string as input and returns the string reversed.

// Solution by Own logic
function reverseStr(str) {
  let newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    console.log(i);
    newStr += str[i];
  }

  return newStr;
}

console.log(reverseStr("line"));

// Solution by use built in methods
function reverseStr(str) {
  return str.split("").reverse().join("");
}

console.log(reverseStr("line"));
