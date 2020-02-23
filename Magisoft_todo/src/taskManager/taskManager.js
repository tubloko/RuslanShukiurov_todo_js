const fetchManager = (rout, data) => {
    fetch(`http://127.0.0.1:3001/api/${rout}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            task: data,
        }),
    }).then(() => console.log('data was sent'));
};

export default class TaskManager {
    async getAllTasks () {
        const response = await fetch('http://127.0.0.1:3001/api/getAllTask', { mode: "cors" });
        if (response.ok) {
            const json = await response.json();
            return json;
        } else {
            console.log(`error with status: ${response.status}`);
        }
    }
    addTask ( {task, taskDate} ) {
        fetch(`http://127.0.0.1:3001/api/addTask`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                task: task,
                taskDate: taskDate
            }),
        }).then(() => console.log('data was sent'));
    }
    deleteTask (deleteId) {
        fetchManager('deleteTask', deleteId);
    }
    checkTask (checkId, done) {
        fetch('http://127.0.0.1:3001/api/checkTask', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                id: checkId,
                done: done,
            }),
        }).then(() => console.log('id was sent'));
    }
    importantTask (importantId, important) {
        fetch('http://127.0.0.1:3001/api/importantTask', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                id: importantId,
                important: important,
            }),
        }).then(() => console.log('id was sent'));
    }
}