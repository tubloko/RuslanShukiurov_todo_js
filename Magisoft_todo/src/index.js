import App from "./app/app";

import './styles/style.scss';

const {
    todoList,
    filterTask,
    createTask
} = new App();
todoList();
filterTask();
createTask();


