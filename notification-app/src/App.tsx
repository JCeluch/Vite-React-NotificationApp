// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './styles/App.module.scss';
import Navbar from './components/Navbar';
import RequestPage from './pages/RequestPage';
import OnHoldPage from './pages/OnHoldPage';
import NewFeaturePage from './pages/NewFeaturePage';
import { NotificationProvider, useNotifications } from './contexts/NotificationContext';

const MainPage: React.FC = () => {
  const { clearNotifications, notifications, repopulateNotifications } = useNotifications();

  return (
    <div>
      <div className={styles.title}> Hello, React App by Vite with Typescript and SCSS Modules!</div>
      <div className={styles.subtitle}>Devtools</div>
      <button onClick={repopulateNotifications} className={styles.clearButton} disabled={notifications.length !== 0}>
        Populate Notifications
      </button>
      <button onClick={clearNotifications} className={styles.clearButton} disabled={notifications.length === 0}>
        Clear Notifications
      </button>

    </div>
  )
}

const App: React.FC = () => {
  return (
    <NotificationProvider>
      <Router>
        <div className={styles.container}>
          <Navbar />
          <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/request' element={<RequestPage />} />
            <Route path='/on_hold' element={<OnHoldPage />} />
            <Route path='/new_feature' element={<NewFeaturePage />} />
          </Routes>
        </div>
      </Router>
    </NotificationProvider>
  );
};

export default App;
