import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from '../components/TaskItem';

test('renders task item and handles actions', () => {
  const task = { id: 1, title: 'Task 1', description: 'Desc', completed: false };
  const mockUpdate = jest.fn();
  const mockDelete = jest.fn();
  const mockComplete = jest.fn();

  render(<TaskItem task={task} onUpdate={mockUpdate} onDelete={mockDelete} onComplete={mockComplete} />);

  fireEvent.click(screen.getByText(/Complete/i));
  expect(mockComplete).toHaveBeenCalledWith(task.id);

  fireEvent.click(screen.getByText(/Delete/i));
  expect(mockDelete).toHaveBeenCalledWith(task.id);

  fireEvent.click(screen.getByText(/Edit/i));
  const titleInput = screen.getByDisplayValue(/Task 1/i);
  fireEvent.change(titleInput, { target: { value: 'Updated Task' } });
  fireEvent.click(screen.getByText(/Save/i));
  expect(mockUpdate).toHaveBeenCalledWith(task.id, { title: 'Updated Task', description: 'Desc' });
});
