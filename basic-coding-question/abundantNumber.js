// Check Whether or Not the Number is an Abundant Number 

// A Number that is smaller than the sum of all it's factors except the number itself is known as an Abundant number.

// Example
// Input : Number = 12
// Output : Yes, It's an Abundant Number
// Explanation : The Factors for the number 12 are, 1, 2, 3, 4 and 6. We don't want to include the number itself.
// Now the sum of the factors except the number itself is :
// 1 + 2 + 3 + 4 + 6 = 16
// as the number 16>12 , the number itself.
// It's an abundant number.

const isAbundantNumber = (num) => {
    const factors = []

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            factors.push(i)
        }
    }
    const sum = factors.reduce((acc, cur) => {
        return acc + cur
    })
    return num < sum
}

console.log(isAbundantNumber(8));