const {createTodo, listTodos, markTodoCompleted, markTodoUncompleted, removeTodo} = require("../services/todos");
const {wrapHandler} = require("../helpers/wrapHandler");


const getTodos = wrapHandler(async (req, res) => {
    const {id: userId} = req.user;

    const todos = await listTodos({ userId });
    res.status(200).json(todos);
})

const postTodo = wrapHandler(async (req, res) => {
    const {id: userId} = req.user;
    const {title} = req.body;

    const todo = await createTodo({ title, userId });
    res.status(201).json(todo);
})

const patchTodoCompleted = wrapHandler(async (req, res) => {
    const {id: userId} = req.user;
    const {id} = req.params;

    const todo = await markTodoCompleted({ id, userId });
    res.status(200).json(todo);
})

const patchTodoUncompleted = wrapHandler(async (req, res) => {
    const {id: userId} = req.user;
    const {id} = req.params;

    const todo = await markTodoUncompleted({ id, userId });
    res.status(200).json(todo);
})

const deleteTodo = wrapHandler(async (req, res) => {
    const {id: userId} = req.user;
    const {id} = req.params;

    const todo = await removeTodo({ id, userId });
    res.status(200).json(todo);
})

module.exports = {
    getTodos,
    postTodo,
    patchTodoCompleted,
    patchTodoUncompleted,
    deleteTodo,
}
