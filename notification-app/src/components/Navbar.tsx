// src/components/Navbar.tsx
import React, { useState } from "react";
import styles from './Navbar.module.scss';
import { FaBell } from 'react-icons/fa';
import NotificationsModal from "./NotificationsModal";
import { useNotifications } from "../contexts/NotificationContext";

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { notifications } = useNotifications();
  const unreadCount = notifications.filter(notifications => !notifications.read).length;

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          Notification App
        </div>
        <div 
          className={styles.notifications}
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          <FaBell className={styles.bellIcon}/>
          {unreadCount > 0 && (
            <span className={styles.counter}>{unreadCount}</span>
          )}
        </div>
      </nav>
      <NotificationsModal 
        isOpen={isModalOpen} 
        onRequestClose={() => setIsModalOpen(!isModalOpen)} 
      />
    </>
  );
};

export default Navbar;