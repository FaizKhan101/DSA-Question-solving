// Check Whether or Not the Number is an Automorphic Number

// A number whose square ends with the same number is known as an Automorphic number.

const checkForAutomorphic = (num) => {
    const sqr = num ** 2
    return num === +String(sqr).split('').at(-1)
}

console.log(checkForAutomorphic(5));