twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nu[i] + nu[j] === target) {
                console.log('HIT!, numbers: ' + nu[i] + ' + ' + nu[j]);
            }
        }
    }
};

const nu = [1, 2, 3, 4, 5];

twoSum(nu, 8)