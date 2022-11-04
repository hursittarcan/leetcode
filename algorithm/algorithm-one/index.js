//Challenge one
function search(nums, target) {
    let result = -1;
    for (let i in nums) {
        if (nums[i] === target) {
            result = i;
        }
    }
    return result;
}
//Runtime: 118ms
//Memory: 46.3MB

//Challenge two - skipped for now

//Challenge three
function searchInsert(nums, target) {
    let result = -1;
    for (let i = 0; i < nums.length; i++) {
        if (target > nums[nums.length - 1]) {
            result = nums.length;
        }
        else if (target < nums[0]) {
            result = 0;
        }
        else if (target === nums[i]) {
            result = nums.indexOf(nums[i]);
        }
        else if (target >= nums[i] && target < nums[i + 1]) {
            result = nums.indexOf(nums[i + 1]);
        }
    }
    return result;
}
//Runtime: 102ms
//Memory: 42MB

//Challenge four
function sortedSquares(nums) {
    let absNumbers = [];
    for (let i = 0; i < nums.length; i++) {
        absNumbers.push(Math.abs(nums[i]) ** 2);
    }
    return absNumbers.sort((a, b) => a - b);
}
//Runtime: 89ms
//Memory: 48.6MB
