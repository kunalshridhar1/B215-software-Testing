import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
  const [token, setToken] = useState(null);

  if (!token) {
    return <Home onLogin={setToken} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard token={token} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
