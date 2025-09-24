import React, { useState } from 'react';
import { createTask } from '../services/api';

export default function TaskForm({ token, onTaskCreated }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createTask(token, { title, description });
      onTaskCreated(res.data);
      setTitle('');
      setDescription('');
    } catch (err) {
      alert('Failed to create task');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Task title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Task description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
}
