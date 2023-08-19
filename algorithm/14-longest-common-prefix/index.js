//14. Longest Common Prefix - Easy

//Runtime: 39ms (Beats 99.59%)
//Memory: 40.7mb (Beats 99.97%)

function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
        }
    }
    return prefix;
}