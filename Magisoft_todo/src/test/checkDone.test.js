const count = [
    [0, 1, 1, 1, 0, 1, 4],
    [0, 1, 1, 2],
    [0, 1, 0, 0, 1],
    [0, 1, 0, 1, 0, 0, 2],
];

const done = (arr) => {
    return arr.filter(a => a).length - 1;
};

count.forEach(a => {
    test('active', () => {
        expect(done(a)).toBe(a[a.length - 1]);
    });
});