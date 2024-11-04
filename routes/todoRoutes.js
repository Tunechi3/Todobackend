const express = require('express');
const { 
  createTodo, 
  getAllTodos, 
  updateTodo, 
  deleteTodo, 
  deleteAllTodos 
} = require('../controllers/todoController');

const router = express.Router();

router.post('/create', createTodo);
router.get('/all', getAllTodos);
router.put('/update/:id', updateTodo);
router.delete('/delete/:id', deleteTodo);
router.delete('/deleteAll', deleteAllTodos);

module.exports = router;
