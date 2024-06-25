// src/App.tsx
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import Navbar from './components/Navbar';
import RequestPage from './pages/RequestPage';
import OnHoldPage from './pages/OnHoldPage';
import NewFeaturePage from './pages/NewFeaturePage';
import { NotificationInterface } from './components/Notification';

const mockedNotifications: NotificationInterface[] = [
  { id: 1, message: 'You have a new request', read: false, type: 'request' },
  { id: 2, message: 'Status changed to on hold', read: true, type: 'on_hold' },
  { id: 3, message: 'New feature avaliable', read: false, type: 'new_feature' }
]

const App: React.FC = () => {
  const [notifications, setNotifications] = useState<NotificationInterface[]>(mockedNotifications);

  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [notifications]);

  const markAllAsRead = () => {
    setNotifications(prevNotifications => {
      return prevNotifications.map(notifications => (({
        ...notifications,
        read: true
      })));
    });
  }

  const markAsRead = (id: number) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id ? {...notification, read: true} : notification
      )
    );
  };

  return (
    <Router>
      <div className={styles.container}>
        <Navbar 
          notifications={notifications}
          markAllAsRead={markAllAsRead}
          markAsRead={markAsRead}
        />
        <Routes>
          <Route path='/' element={
            <div className={styles.title}>Hello, React Vite, TS and SCSS!</div>
          }/>
          <Route path='/request' element={<RequestPage />} />
          <Route path='/on_hold' element={<OnHoldPage />} />
          <Route path='/new_feature' element={<NewFeaturePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
