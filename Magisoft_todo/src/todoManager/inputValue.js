import checkDate from "../utils/checkDate";

const inputValue = () => {
    const task = document
        .querySelector('#inputValue');
    const taskDate = document
        .querySelector('#dateTask');

    if (task.value.length === 0) {
        alert('incorrect task');
        return;
    }
    if (!checkDate(taskDate.value)) return;

    return {
        task: task.value,
        taskDate: taskDate.value
    };
};

export default inputValue;