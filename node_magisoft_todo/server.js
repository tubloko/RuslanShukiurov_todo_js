const Koa = require('koa');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');
const Router = require('koa-router');

const taskController = require('./controller/taskController');

const app = new Koa();

const router = new Router();

router
    .get('/api/getAllTask', taskController.getAllTask)
    .post('/api/addTask', taskController.addTask)
    .post('/api/checkTask', taskController.checkTask)
    .post('/api/deleteTask', taskController.deleteTask)
    .post('/api/importantTask', taskController.importantTask);

app
    .use(bodyParser())
    .use(cors())
    .use(router.routes());

app.listen(3001, () => {
    console.log('server was started');
});