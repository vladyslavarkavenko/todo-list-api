const {Router} = require("express");
const {requiredAuth} = require("../middlewares/requiredAuth");
const {getTodos, postTodo, patchTodoCompleted, patchTodoUncompleted, deleteTodo} = require("../controllers/todos");

const router = Router();

router.use(requiredAuth);

router.get('/', getTodos);
router.post('/', postTodo);
router.patch('/:id/completed', patchTodoCompleted);
router.patch('/:id/uncompleted', patchTodoUncompleted);
router.delete('/:id', deleteTodo);

module.exports = router;