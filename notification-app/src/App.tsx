// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import Navbar from './components/Navbar';
import RequestPage from './pages/RequestPage';
import OnHoldPage from './pages/OnHoldPage';
import NewFeaturePage from './pages/NewFeaturePage';
import { NotificationProvider } from './contexts/NotificationContext';

const App: React.FC = () => {
  return (
    <NotificationProvider>
      <Router>
        <div className={styles.container}>
          <Navbar />
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
    </NotificationProvider>
  );
};

export default App;
