// src/pages/RequestPage.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../styles/App.module.scss';

const RequestPage: React.FC = () => {
  const location = useLocation();
  const message = location.state?.message || 'This is the request page.'

  return (
    <div className={styles.home}>
      <h1>Request Page</h1>
      <h2>Notification message</h2>
      <p>{message}</p>
    </div>
  );
};

export default RequestPage;
