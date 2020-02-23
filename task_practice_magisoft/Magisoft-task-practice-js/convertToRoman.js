const convertToRoman = (num) => {
    if (!num || !Number.isInteger(num)) return `incorrect data ${num}`;

    let decimalNum = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    let romanNum = [ "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" ];
    let result = '';

    for (let i = 0; i < decimalNum.length; i++) {
        while (decimalNum[i] <= num) {
            result += romanNum[i];
            num -= decimalNum[i];
        }
    }

    return result;
};
convertToRoman(36);