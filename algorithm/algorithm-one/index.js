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

//Challenge three
function searchInsert(nums, target) {
    let result = -1;
    for (let i in nums) {
        console.log(nums[i]);
        if (target > nums[nums.length - 1]) {
            result = nums.indexOf(nums[nums.length - 1]) + 1;
        }
    }
    return result;
}

let arr = [2, 3, 8, 10, 11];
console.log(searchInsert(arr, 20));

//console.log(arr[arr.length - 1]);
