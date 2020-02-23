const arrStr = [
    ["The quick brown fox jumped over the lazy dog", 6],
    ["The quick brown fox jumpedOver over the lazy dog", 10],
    ["The quick brown fox jumpedJumped over the lazy dog", 12],
    [null, 0],
    ["", 0],
    [456, 0],
];

const findLongestWord = (str) => {
    return typeof str === 'string' && str ? str
            .split(' ')
            .sort((a, b) => b.length - a.length)[0].length
        : 0;
}

arrStr.forEach(a => {
    test(`${a[0]}`, () => {
        expect(findLongestWord(a[0])).toBe(a[1]);
    });
})