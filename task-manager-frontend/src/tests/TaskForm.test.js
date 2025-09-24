import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from '../components/TaskForm';

test('renders task form and calls onCreate', () => {
  const mockCreate = jest.fn();
  render(<TaskForm onCreate={mockCreate} />);

  const titleInput = screen.getByPlaceholderText(/Task Title/i);
  const descInput = screen.getByPlaceholderText(/Description/i);
  const button = screen.getByText(/Add Task/i);

  fireEvent.change(titleInput, { target: { value: 'Test Task' } });
  fireEvent.change(descInput, { target: { value: 'Test Desc' } });
  fireEvent.click(button);

  expect(mockCreate).toHaveBeenCalledWith({ title: 'Test Task', description: 'Test Desc' });
});
    expect(titleInput.value).toBe('');      