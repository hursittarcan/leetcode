//1. Two Sum - Easy

//Runtime: 82ms (Beats 50.42%)
//Memory: 42.06 (Beats 82.92%)

twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};