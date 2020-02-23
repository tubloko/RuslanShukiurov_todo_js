import TaskManager from "../taskManager/taskManager";
import createElement from "./createElement";

const {
    getAllTasks,
} = new TaskManager();

const createTaskList = () => {
    getAllTasks().then(body => {
        body.forEach(a => {createElement(a)});
    });
};

export default createTaskList;