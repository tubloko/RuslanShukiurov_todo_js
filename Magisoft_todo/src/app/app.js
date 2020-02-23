import FilterManager from "../filterManager/filterManager";
import createTaskList from "../todoManager/createTaskList";
import createTask from "../todoManager/createTask";

const {
    allTask,
    activeTask,
    doneTask
} = new FilterManager();

export default class App {
    todoList () {
        createTaskList();
    }

    filterTask () {
        document
            .querySelector('.allTask')
            .addEventListener('click', () => {
                allTask();
            });
        document
            .querySelector('.activeTask')
            .addEventListener('click', () => {
                activeTask();
            });
        document
            .querySelector('.doneTask')
            .addEventListener('click', () => {
                doneTask();
            });
    }

    createTask () {
        createTask();
    }
}