// src/App.tsx
import React, {useState} from 'react';
import styles from './App.module.scss';
import Navbar from './Navbar';

const App: React.FC = () => {
  const [notificationsCount, setNotificationsCount] = useState(3) // Mocked notifications count

  const setNotifications = (changeBy: number) => {
    if (notificationsCount + changeBy >= 0)
      setNotificationsCount((count) => count + changeBy);
  }

  return (
    <div className={styles.container}>
      <Navbar notificationsCount={notificationsCount}/>
      <h1 className={styles.title}>Hello, Vite, TS and SCSS!</h1>
      <div className="card">
        <button onClick={() => setNotifications(1)}>
          Add Notification
        </button>
        <button onClick={() => setNotifications(-1)}>
          Remove Notification
        </button>
      </div>
    </div>
  );
};

export default App;
