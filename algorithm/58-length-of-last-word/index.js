




lengthOfLastWord = function(s) {
    let lastPos = 0;
    let firstPos = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            lastPos = i;
            break;
        }
    }

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ' &&  s[i - 1] === ' ') {
            firstPos = i;
            break;
        }
    }

    //console.log(s[firstPos, lastPos]);
};


let s = "Hello World     "
lengthOfLastWord(s);