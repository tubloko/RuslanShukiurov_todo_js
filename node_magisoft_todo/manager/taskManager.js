const knex = require('./../knexDB/knex');

const TABLE_NAME = 'todomagisoft';

module.exports = {
    getAllTask () {
        return knex(TABLE_NAME).select();
    },
    async addTask (task, taskDate) {
        await knex(TABLE_NAME).insert({ task: task, created_at: new Date(), due_to_date: taskDate });
    },
    async checkTask (id, done) {
        await knex(TABLE_NAME).update('done', done ? 0 : 1).where('taskId', id);
    },
    async deleteTask (id) {
        await knex(TABLE_NAME).where('taskId', id).delete();
    },
    async importantTask (id, important) {
        await knex(TABLE_NAME).update('important', important ? 0 : 1).where('taskId', id);
    },
};