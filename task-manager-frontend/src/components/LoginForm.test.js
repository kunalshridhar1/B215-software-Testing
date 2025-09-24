import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from '../components/LoginForm';

test('renders login form inputs', () => {
  render(<LoginForm />);
  const emailInput = screen.getByPlaceholderText(/email/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  const button = screen.getByRole('button', { name: /login/i });

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(button).toBeInTheDocument();

  fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
  fireEvent.change(passwordInput, { target: { value: '123456' } });
  expect(emailInput.value).toBe('test@test.com');
  expect(passwordInput.value).toBe('123456');
});
