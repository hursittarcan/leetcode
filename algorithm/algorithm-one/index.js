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

//Challenge five - Passes 37/38 tests; Time Limit Exceeded Error!

// function rotate(nums, k) {
//     for (let i = 0; i <= k; i++) {
//         let shift = nums.slice(-1);
//         nums.unshift(shift[0]);
//         nums.pop();
//     }
//     return nums;
// }

//Solution from bakigul
function rotate(nums, k) {
    for (let i = nums.length - 1; i >= 0; i--) {
        nums[i + k] = nums[i];
    }
    for (let i =  k - 1; i >=0; i--) {
        nums[i] = nums.pop();
    }
    return nums;
}

//Runtime: 242ms
//Memory: 59.5MB

//Challenge six
function moveZeroes(nums) {
    // let size = nums.length;
    // nums = nums.filter(number => number !== 0);
    // let nulls = size - nums.length;
    // for (let i = 0; i < nulls; i++) {
    //     nums.push(0);
    // }
    for (let i = nums.length - 1; i >= 0; i--) {
        let num = nums[i];
        if (!num) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
}

//Challenge
function twoSum(numbers, target) {
    for (let j = 0; j < numbers.length; j++) {
        let val = numbers[j];
        let v = numbers.indexOf(val) + 1;
        for (let i = 1; i < numbers.length; i++) {
            if ((val + numbers[i]) === target) {
                return [v, numbers.indexOf(numbers[i], v) + 1];
            }
        }
    }
}

let arr = [0,4, 1,4]
//console.log(twoSum(arr, 5))

//Challenge 344. Reverse String
function reverseString(s) {
    for (let i = s.length - 1; i >= 0; i--) {
        console.log(s.length)
        console.log(s[i]);
        console.log(s);
        s.unshift(s[i]);
        s.pop();
    }
    return s;
}

// let s = ["H","a","n","n","a","h"]
// console.log(reverseString(s));

//Leetcode Challenge 27 - Remove element
function removeElement(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
        }
    }
    return nums;
}

let s = [1, 2, 1, 5, 6, 7, 8]
console.log(removeElement(s, 1));



















