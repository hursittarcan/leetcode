romanToInt = function(s) {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'I') {
            result++;
        }
        else if (s[i] === 'V') {
            if (s[i - 1] === 'I') {
                result += 4 - 1;
            }
            else {
                result += 5;
            }
        }
        else if (s[i] === 'X') {
            if (s[i - 1] === 'I') {
                result += 9 - 1;
            }
            else {
                result += 10;
            }
        }
        else if (s[i] === 'L') {
            if (s[i - 1] === 'X') {
                result += 40 - 10;
            }
            else {
                result += 50;
            }
        }
        else if (s[i] === 'C') {
            if (s[i - 1] === 'X') {
                result += 90 - 10;
            }
            else {
                result += 100;
            }
        }
        else if (s[i] === 'D') {
            if (s[i - 1] === 'C') {
                result += 400 - 100;
            }
            else {
                result += 500;
            }
        }
        else if (s[i] === 'M') {
            if (s[i - 1] === 'C') {
                result += 900 - 100;
            }
            else {
                result += 1000;
            }
        }
    }
    return result;
};

console.log(romanToInt('MCMXCIV'));
