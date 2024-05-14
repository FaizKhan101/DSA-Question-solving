// Write a function that checks whether a given string is a palindrome (reads the same forwards and backwards).

function palindrome(str) {
    let reverseStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }

    if (str.toLowerCase() === reverseStr.toLowerCase()) {
        return "Given string is a palindrome.";
    }
    return "Given string is not a palindrome.";
}

console.log(palindrome("Mandam"));