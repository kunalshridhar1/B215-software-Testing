import React, { useEffect, useState } from 'react';
import { getTasks } from '../services/api';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';

export default function Dashboard({ token }) {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await getTasks(token);
    setTasks(res.data);
  };

  useEffect(() => { fetchTasks(); }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <TaskForm token={token} onTaskCreated={fetchTasks} />
      {tasks.map(task => (
        <TaskItem key={task.id} token={token} task={task} onUpdate={fetchTasks} />
      ))}
    </div>
  );
}
