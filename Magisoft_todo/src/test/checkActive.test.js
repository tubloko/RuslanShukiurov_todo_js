const countActive = [
    [0, 1, 1, 1, 0, 1, 2],
    [0, 1, 1, 1],
    [0, 1, 0, 0, 3],
    [0, 1, 0, 1, 0, 0, 4],
];

const active = (arr) => {
    return arr.filter(a => !a).length;
};

countActive.forEach(a => {
    test('active', () => {
        expect(active(a)).toBe(a[a.length - 1]);
    });
});