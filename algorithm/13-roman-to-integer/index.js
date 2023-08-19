//13. Integer To Roman - Easy

//Runtime: 101ms (Beats 93.02%)
//Memory: 46.07mb (Beats 97.96%)

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