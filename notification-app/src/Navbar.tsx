// src/Navbar.tsx
import React from "react";
import styles from './Navbar.module.scss';
import {FaBell} from 'react-icons/fa';

interface NavbarProps {
  notificationsCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ notificationsCount }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        Notification App
      </div>
      <div>Home</div>
      <div>About us</div>
      <div>Contact</div>
      <div className={styles.notifications}>
        <FaBell className={styles.bellIcon}/>
        {notificationsCount > 0 && (
          <span className={styles.counter}>{notificationsCount}</span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;