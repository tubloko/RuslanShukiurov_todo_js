const taskManager = require('./../manager/taskManager');

module.exports = {
    async getAllTask (ctx) {
        const tasks = await taskManager.getAllTask();
        ctx.body = tasks;
    },
    async addTask (ctx) {
        const { task, taskDate } = ctx.request.body;
        await taskManager.addTask(task, taskDate);
    },
    async deleteTask (ctx) {
        const { task } = ctx.request.body;
        await taskManager.deleteTask(task);
    },
    async checkTask (ctx) {
        const { id, done } = ctx.request.body;
        await taskManager.checkTask(id, done);
    },
    async importantTask (ctx) {
        const { id, important } = ctx.request.body;
        await taskManager.importantTask(id, important);
    },
};