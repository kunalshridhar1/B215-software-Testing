import React from 'react';
import { completeTask, deleteTask } from '../services/api';

export default function TaskItem({ token, task, onUpdate }) {
  const handleComplete = async () => {
    await completeTask(token, task.id);
    onUpdate();
  };

  const handleDelete = async () => {
    await deleteTask(token, task.id);
    onUpdate();
  };

  return (
    <div>
      <h4 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</h4>
      <p>{task.description}</p>
      <button onClick={handleComplete}>Complete</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
