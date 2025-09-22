const express = require('express');
const cors = require('cors');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// In-memory todo storage
let todos = [
  { id: uuidv4(), text: 'Learn React', completed: false },
  { id: uuidv4(), text: 'Build Node.js API', completed: true },
  { id: uuidv4(), text: 'Create awesome portfolio', completed: false }
];

// API Routes
// GET /api/todos - Get all todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// POST /api/todos - Create new todo
app.post('/api/todos', (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Todo text is required' });
  }
  
  const newTodo = {
    id: uuidv4(),
    text,
    completed: false
  };
  
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT /api/todos/:id - Update todo
app.put('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  const { text, completed } = req.body;
  
  const todoIndex = todos.findIndex(todo => todo.id === id);
  if (todoIndex === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  
  if (text !== undefined) todos[todoIndex].text = text;
  if (completed !== undefined) todos[todoIndex].completed = completed;
  
  res.json(todos[todoIndex]);
});

// DELETE /api/todos/:id - Delete todo
app.delete('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  const todoIndex = todos.findIndex(todo => todo.id === id);
  
  if (todoIndex === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  
  todos.splice(todoIndex, 1);
  res.status(204).send();
});

// Serve portfolio files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve todo app
app.get('/todo', (req, res) => {
  res.sendFile(path.join(__dirname, 'todo-vanilla.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Portfolio: http://localhost:${PORT}`);
  console.log(`Todo App: http://localhost:${PORT}/todo`);
});