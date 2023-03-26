const Todo = require("../database/models/todos");

const listTodos = ({userId}) => {
    return Todo.findAll({where: {userId}});
}
const createTodo = ({title, userId}) => {
    return Todo.create({title, userId});
}
const markTodoCompleted = async ({id, userId}) => {
    const [_n, todos] = await Todo.update({
        completed: true
    }, {
        where: {id, userId},
        returning: true
    });
    return todos[0];
}
const markTodoUncompleted = async ({id, userId}) => {
    const [_n, todos] = await Todo.update({
        completed: false
    }, {
        where: {id, userId},
        returning: true
    });
    return todos[0];
}

const removeTodo = async ({id, userId}) => {
    const n = await Todo.destroy({where: {id, userId}});
    return n === 1;
}

module.exports = {
    listTodos,
    createTodo,
    markTodoCompleted,
    markTodoUncompleted,
    removeTodo
}