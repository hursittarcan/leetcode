//12. Integer To Roman - Easy

//Runtime: 107ms (Beats 85.81%)
//Memory: 47.20mb (Beats 57.14%)

//12. Integer To Roman - 2 - Easy

//Runtime: 101ms (Beats 93.02%)
//Memory: 46.07mb (Beats 97.96%)

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

//console.log(romanToInt('MCMXCIV'));



romanToInt2 = function(s) {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case 'I':
                result++;
                break;
            case 'V':
                result += s[i - 1] === 'I' ? 3 : 5;
                break;
            case 'X':
                result += s[i - 1] === 'I' ? 8 : 10;
                break;
            case 'L':
                result += s[i - 1] === 'X' ? 30 : 50;
                break;
            case 'C':
                result += s[i - 1] === 'X' ? 80 : 100;
                break;
            case 'D':
                result += s[i - 1] === 'C' ? 300 : 500;
                break;
            case 'M':
                result += s[i - 1] === 'C' ? 800 : 1000;
                break;
        }
    }
    return result;
}

console.log(romanToInt('MCMXCIV'));