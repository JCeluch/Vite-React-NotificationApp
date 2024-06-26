// src/NewFeaturePage.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const NewFeaturePage: React.FC = () => {
  const location = useLocation();
  const message = location.state?.message || 'This is the new feature page.'

  return (
    <div>
      <h1>New Feature Page</h1>
      <h2>Notification message</h2>
      <p>{message}</p>
    </div>
  );
};

export default NewFeaturePage;
