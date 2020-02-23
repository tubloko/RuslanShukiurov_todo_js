const letters = ['a', 'b', 'c'];
const nums = [1, 2, 3];

const zipObject = (letters, nums) => {
    const result = {};

    letters.forEach((a, idx) => result[a] = nums[idx]);

    console.log(result);
    return result;
}
zipObject(letters, nums);