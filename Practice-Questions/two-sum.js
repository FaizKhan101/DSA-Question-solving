var twoSum = function(nums, target) {
    var start = 0;
    for ( let i = start++; i < nums.length + 1; i++) {
        if ( nums[start] + nums[i] === target) {
            return [start, i]
        }
    }
    start++
    return "No match"
};

twoSum([2,7,11,15], 9)