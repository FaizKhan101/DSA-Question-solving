// Check for Perfect Square

const perfectSquare = (num) => {
  for (let i = 1; i <= num / 2; i++) {
    if (i ** 2 === num) {
      return true;
    }
  }
  return false;
};

console.log(perfectSquare(64));
