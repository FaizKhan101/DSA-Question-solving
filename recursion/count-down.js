function countDown(num) {
    if (num === 0) {
        return "All Done"
    }
    console.log(num);
    num--
    return countDown(num)
}

console.log(countDown(5));