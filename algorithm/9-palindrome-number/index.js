//1. Palindrome Number - Easy

//Runtime: 303ms (Beats 5.4%)
//Memory: 51.2mb (Beats 41.89%)

isPalindrome = function (x) {
    let number = x.toString();
    let reverseNumber = "";
    for (let i = number.length - 1; i >= 0; i--) {
        reverseNumber += number[i];
    }
    return number === reverseNumber;
};