const Todo = require('../models/todoModel');


// Get all todos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new todo
exports.createTodo = async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
  });
  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a specific todo by ID
exports.updateTodo = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title: req.body.title },
      { new: true }
    );
    if (!updatedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

};

// Delete a specific todo by ID
exports.deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete all todos
exports.deleteAllTodos = async (req, res) => {
  try {
    await Todo.deleteMany({});
    res.json({ message: 'All todos deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
