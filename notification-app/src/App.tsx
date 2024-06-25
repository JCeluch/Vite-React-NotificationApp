// src/App.tsx
import React from 'react';
import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello, Vite, TS and SCSS!</h1>
    </div>
  );
};

export default App;
