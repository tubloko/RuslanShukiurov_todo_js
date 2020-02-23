import TaskManager from "../taskManager/taskManager";
import {onStart, timer} from "../utils/timer";

const {
    deleteTask,
    checkTask,
    importantTask
} = new TaskManager();

const createElement = ({task, created_at, done, important, taskId, due_to_date}) => {
    const li = document.createElement('li');
    li.className = `list-group-item ${important ? 'importantTask' 
        : Number(due_to_date.split('-')[2]) - new Date().getDate() === 1 ? 'importantTask' : ''}`;
    li.value = done;
    document.querySelector('.list-group').appendChild(li);

    const timeSpan = document.createElement('span');
    timeSpan.className = 'time';
    if (important) {
        setInterval(() => {
            timeSpan.innerHTML = timer(`${taskId}`);
        }, 1000);
    }
    if (Number(due_to_date.split('-')[2]) - new Date().getDate() === 1) {
        setInterval(() => {
            timeSpan.innerHTML = timer(`${taskId}`);
        }, 1000);
    }
    li.appendChild(timeSpan);
    console.log(timeSpan);

    const checkButton = document.createElement('button');
    checkButton.className = `btn btn-outline-warning ${done ? 'done' : 'none'}`;
    checkButton.value = taskId;
    checkButton.innerHTML = task;
    checkButton.onclick = (e) => {
        checkTask(taskId, done);
    };
    li.appendChild(checkButton);

    const i = document.createElement('i');
    i.value = taskId;
    i.className = 'fa fa-trash-o';

    const button = document.createElement('button');
    button.className = 'btn btn-outline-danger float-right';
    button.value = taskId;
    button.onclick = (e) => {
        e.stopPropagation();
        deleteTask(taskId);
    };
    button.appendChild(i);
    li.appendChild(button);

    const importantSpan = document.createElement('span');
    importantSpan.value = task;
    importantSpan.className = 'fa fa-exclamation';

    const importantButton = document.createElement('button');
    importantButton.className = 'btn btn-outline-success float-right start';
    importantButton.value = task;
    importantButton.onclick = (e) => {
        e.stopPropagation();
        onStart(`${taskId}`);
        importantTask(taskId, important);
    };
    importantButton.appendChild(importantSpan);
    li.appendChild(importantButton);
};

export default createElement;