const str = 'abce';

const fearNotLetter = (str) => {
    if (!str || typeof str !== 'string') return `incorrect data ${str}`;

    for (let i = 0; i < str.length - 1; i++) {
        if ((str[i + 1].charCodeAt(0) - str.charCodeAt(i)) !== 1) {
            console.log(String.fromCharCode(str.charCodeAt(i) + 1));
            return String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }

    return String.fromCharCode(str.charCodeAt(str.length - 1) + 1);
}
fearNotLetter(str);