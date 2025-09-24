import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

export default function Home({ onLogin }) {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div>
      {showRegister ? <RegisterForm /> : <LoginForm onLogin={onLogin} />}
      <button onClick={() => setShowRegister(!showRegister)}>
        {showRegister ? 'Back to Login' : 'Go to Register'}
      </button>
    </div>
  );
}
