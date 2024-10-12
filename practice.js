const nums = [2,1]

var firstMissingPositive = function (nums) {

    if (nums.length === 1 && nums[0] === 1) {
        return 2
    } else if (nums.length === 1 && nums[0] > 1) {
        return 1
    }

    const sortArr = nums.sort((a, b) => a - b)

    if (sortArr[0] > 1) {
        return 1
    }

    for (let i = sortArr[0]; i <= sortArr.length; i++) {
        if (!sortArr.includes(i) && i > 0) {
            return i
        }
    }
    return sortArr.length + 1
};

console.log(firstMissingPositive(nums));
