import TaskManager from "../taskManager/taskManager";
import inputValue from "./inputValue";

const {
    addTask,
} = new TaskManager();

const createTask = () => {
    document
        .querySelector('#addTask')
        .addEventListener('click', (e) => {
            addTask(inputValue());
        });
};

export default createTask;