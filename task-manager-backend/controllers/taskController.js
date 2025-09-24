const Task = require('../models/taskModel');

exports.createTask = (req, res) => {
  const { title, description } = req.body;
  Task.createTask(title, description, req.user.id, (err, id) => {
    if (err) return res.status(500).json({ message: 'Failed to create task' });
    res.status(201).json({ message: 'Task created', id });
  });
};

exports.getTasks = (req, res) => {
  Task.getTasksByUser(req.user.id, (err, tasks) => {
    if (err) return res.status(500).json({ message: 'Failed to fetch tasks' });
    res.json(tasks);
  });
};

exports.updateTask = (req, res) => {
  const { title, description } = req.body;
  Task.updateTask(req.params.id, title, description, (err, changes) => {
    if (err || changes === 0) return res.status(400).json({ message: 'Update failed' });
    res.json({ message: 'Task updated' });
  });
};

exports.markCompleted = (req, res) => {
  Task.markTaskCompleted(req.params.id, (err, changes) => {
    if (err || changes === 0) return res.status(400).json({ message: 'Update failed' });
    res.json({ message: 'Task marked completed' });
  });
};

exports.deleteTask = (req, res) => {
  Task.deleteTask(req.params.id, (err, changes) => {
    if (err || changes === 0) return res.status(400).json({ message: 'Delete failed' });
    res.json({ message: 'Task deleted' });
  });
};
