const arr1 = ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"];
const arr2 = ["diorite", "andesite", "grass", "dirt", "dead shrub"];

const compareTwoArrays = (arr1, arr2) => {
    const buffer = [...arr2, ...arr1];
    let result = [];

    buffer.map(word => {
        let count = 0;
        for (let j = 0; j < buffer.length; j++) {
            if (word === buffer[j]) count++;
        }
        if (count === 1) result.push(word);
    });

    console.log(result);
    return result;
}
compareTwoArrays(arr1, arr2);