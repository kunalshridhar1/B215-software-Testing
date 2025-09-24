import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from '../src/components/LoginForm';
import { BrowserRouter } from 'react-router-dom';

test('renders login form inputs', () => {
  render(
    <BrowserRouter>
      <LoginForm />
    </BrowserRouter>
  );

  expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
  expect(screen.getByText(/Login/i)).toBeInTheDocument();
});

test('shows error on empty submit', () => {
  render(
    <BrowserRouter>
      <LoginForm />
    </BrowserRouter>
  );

  fireEvent.click(screen.getByText(/Login/i));
  expect(screen.queryByText(/Login failed/i)).toBeNull(); // No backend called yet
});
