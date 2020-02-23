const tree = {
    value: 1,
    next: [{value: 6, next: null}, {
        value: 2,
        next: [{value: 77, next: null}, {value: 4, next: [{value: 55, next: null}, {value: -5, next: null}]}]
    }]
};

const sumOfTree = (tree) => {
    let str = JSON.stringify(tree);
    let nums = [];

    for (let i = 0; i < str.length; i++) {
        if ( /[0-9]/.test(str[i]) || (str[i] === '-' && /[0-9]/.test(str[i + 1])) ) {
            let temp = [];
            while ( /[0-9]/.test(str[i]) || (str[i] === '-' && /[0-9]/.test(str[i + 1])) ) {
                temp.push(str[i]);
                i++;
            }
            nums.push(temp.join(''));
        }
    }

    console.log(nums);
    console.log(nums.reduce((a, b) => Number(a) + Number(b)));
    return nums.reduce((a, b) => Number(a) + Number(b));
}
sumOfTree(tree);