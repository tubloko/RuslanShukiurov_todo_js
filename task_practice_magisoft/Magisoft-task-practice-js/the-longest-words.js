let str = "The quick brown fox jumped over the lazy dog";

const findLongestWord = (str) => {
    return typeof str === 'string' && str ? str
        .split(' ')
        .sort((a, b) => b.length - a.length)[0].length : `incorrect data ${str}`;
}
findLongestWord(str);