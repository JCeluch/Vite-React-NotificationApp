// src/components/Navbar.tsx
import React, { useState } from "react";
import styles from './Navbar.module.scss';
import { FaBell } from 'react-icons/fa';
import NotificationsModal from "./NotificationsModal";

interface Notification {
  id: number;
  message: string;
  read: boolean;
}

interface NavbarProps {
  notifications: Notification[];
  markAllAsRead: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  notifications, 
  markAllAsRead 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const unreadCount = notifications.filter(notifications => !notifications.read).length;

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          Notification App
        </div>
        <div>Home</div>
        <div>About us</div>
        <div>Contact</div>
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
        notifications={notifications} 
        markAllAsRead={markAllAsRead}        
      />
    </>
  );
};

export default Navbar;