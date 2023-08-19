
// Input: strs = ["flower","flow","flight"]
// Output: "fl"



longestCommonPrefix = function(strs) {
    let result = '';
    for (let i = 0; i < strs.length; i++) {
        console.log(strs[i]);
        for (let j = 0; j < strs[i].length; j++) {
            console.log(strs[i][j]);
        }
    }
};

let strs = ["flower","flow","flight"]
longestCommonPrefix(strs);