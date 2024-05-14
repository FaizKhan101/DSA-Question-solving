function evenOrOdd(num) {
  if (typeof num !== "number") {
    return "Invalid Input!";
  }
  if (num % 2 === 0) {
    return "Given number is Even.";
  } else if (num % 2 !== 0) {
    return "Given number is Odd.";
  }
}

console.log(evenOrOdd(3));

function evenOrOdd2(num) {
  return num % 2 === 0 ? "Given number is Even." : "Given number is Odd.";
}

console.log(evenOrOdd2(5));
