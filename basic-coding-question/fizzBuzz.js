// Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

for (let i = 1; i <= 50; i++) {
  let output = "";
  if (i % 3 == 0) output = "Fizz";
  else if (i % 5 == 0) output = "Buzz";
  else output = i;
  if (i % 3 == 0 && i % 5 == 0) output = "FizzBuzz";

  console.log(output);
}

// Second solution
function fizzBuzz(range) {
  for (let i = 1; i <= range; i++) {
    let div3 = i % 3 === 0;
    let div5 = i % 5 === 0;

    if (div3 && div5) console.log("FizzBuzz");
    else if (div3) console.log("Fizz");
    else if (div5) console.log("Buzz");
    else console.log(i);
  }
  return "Complete";
}

console.log(fizzBuzz(100));
