import checkDate from "../utils/checkDate";

const testing = [
    ['2020-06-23', true],
    ['2020-02-23', true],
    ['2020-02-22', true],
    ['2019-01-06', false],
    ['202-06-23', false],
    ['2021-02-21', true],
    ['2020-12-23', true],
    ['2020-06', false],
];

testing.forEach(a => {
    test(`${a}`, () => {
        expect(checkDate(a[0])).toBe(a[1]);
    })
});