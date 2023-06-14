function removeDuplicates(nums) {
    let unique = [];
    for (let i = 0; i < nums.length; i++) {
        if (!unique.includes(nums[i])) {
            unique.push(nums[i]);
        }
    }
    return unique;
}

let nums = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 10, 10, 14, 15];

console.log(removeDuplicates(nums));