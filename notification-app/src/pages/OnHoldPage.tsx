// src/pages/OnHoldPage.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../styles/App.module.scss';

const OnHoldPage: React.FC = () => {
  const location = useLocation();
  const message = location.state?.message || 'This is the on hold page.'

  return (
    <div className={styles.home}>
      <h1>On Hold Page</h1>
      <h2>Notification message</h2>
      <p>{message}</p>
    </div>
  );
};

export default OnHoldPage;
