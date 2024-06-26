// src/NewFeaturePage.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../styles/App.module.scss';

const NewFeaturePage: React.FC = () => {
  const location = useLocation();
  const message = location.state?.message || 'This is the new feature page.'

  return (
    <div className={styles.home}>
      <h1>New Feature Page</h1>
      <h2>Notification message</h2>
      <p>{message}</p>
    </div>
  );
};

export default NewFeaturePage;
