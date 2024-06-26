// src/pages/OnHoldPage.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const OnHoldPage: React.FC = () => {
  const location = useLocation();
  const message = location.state?.message || 'This is the on hold page.'

  return (
    <div>
      <h1>On Hold Page</h1>
      <h2>Notification message</h2>
      <p>{message}</p>
    </div>
  );
};

export default OnHoldPage;
