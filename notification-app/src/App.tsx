// src/App.tsx
import React, {useState} from 'react';
import styles from './App.module.scss';
import Navbar from './components/Navbar';

interface Notification {
  id: number;
  message: string;
  read: boolean;
}

const mockedNotifications: Notification[] = [
  { id: 1, message: 'New message received', read: false },
  { id: 2, message: 'Server maintenance at 3 PM', read: true },
  { id: 3, message: 'Meeting at 10 AM', read: false }
]

const App: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>(mockedNotifications);

  const markAllAsRead = () => {
    setNotifications(prevNotifications => {
      return prevNotifications.map(notifications => (({
        ...notifications,
        read: true
      })));
    });
  }

  return (
    <div className={styles.container}>
      <Navbar 
        notifications={notifications}
        markAllAsRead={markAllAsRead}
      />
      <h1 className={styles.title}>Hello, Vite, TS and SCSS!</h1>
    </div>
  );
};

export default App;
