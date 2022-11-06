// “>” and less than is “<”

// 1480. Running Sum of 1d Array
function runningSum(nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] = nums[i] + nums[i - 1];
    }
    return nums;
}
