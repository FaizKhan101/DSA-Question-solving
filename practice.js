// // const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

// // function isStrong(num) {
// //   let arrOfNum = String(num).split("");

// //   const factorial = (n) => (n === 1 || n === 0 ? 1 : n * factorial(n - 1));

// //   let totalOfFactotial = 0;

// //   for (let i of arrOfNum) {
// //     totalOfFactotial += factorial(+i);
// //   }
// //   if (num === totalOfFactotial) {
// //     return "Number is strong.";
// //   }
// //   return "Number is not strong";
// // }
// // console.log(isStrong(40585));

// function isStrong(num) {
//     const arrOfNum = String(num).split("");

//     const factorial = (n) => (n === 0 || n === 1 ? 1 : n * factorial(n - 1));
//     let sumOfFac = 0;
//     for (let i of arrOfNum) {
//       sumOfFac += factorial(+i);
//     }
//     if (sumOfFac === num) {
//       return "Number is strong.";
//     }
//     return "Number is not string.";
//   }

//   console.log(isStrong(145));

function isStrong(num) {
  const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
  const sumOfFac = String(num).split("")
    .reduce((sum, digit) => sum + factorial(+digit), 0);
  return sumOfFac === num;
}

console.log(isStrong(145) ? "Number is strong." : "Number is not strong.");
