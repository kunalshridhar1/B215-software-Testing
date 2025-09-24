import TaskItem from './TaskItem';

function TaskList({ tasks, onUpdate, onDelete, onComplete }) {
  if (!tasks.length) return <p>No tasks found</p>;

  return (
    <ul>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onUpdate={onUpdate} onDelete={onDelete} onComplete={onComplete} />
      ))}
    </ul>
  );
}

export default TaskList;
