isValid = function(s) {
    let result = false;

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '(':
                if (s[i + 1] === ')') {
                    result = true;
                }
                else {
                    return false;
                }
                break;
            case '[':
                if (s[i + 1] === ']') {
                    result = true;
                }
                else {
                    return false;
                }
                break;
            case '{':
                if (s[i + 1] === '}') {
                    result = true;
                }
                else {
                    return false;
                }
                break;
        }
    }
    return result;
}

let s = "()[{}";
console.log(isValid(s));

//()[]{}


//
// Example 1:
//
// Input: s = "()"
// Output: true
// Example 2:
//
// Input: s = "()[]{}"
// Output: true

