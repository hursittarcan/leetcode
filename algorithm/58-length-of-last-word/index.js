//58. Length Of Last Word - Easy

//Runtime: 55ms (Beats 57.69%)
//Memory: 41.01mb (Beats 98.89%)

lengthOfLastWord = function(s) {
    let positionFirstLetter = 0;
    let positionLastLetter = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            positionLastLetter = i;
            break;
        }
    }

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ' &&  s[i - 1] === ' ') {
            positionFirstLetter = i;
            break;
        }
    }

    return positionLastLetter - positionFirstLetter + 1;
};