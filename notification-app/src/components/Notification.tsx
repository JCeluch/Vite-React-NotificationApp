// src/components/Notification.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Notification.module.scss';
import { FaDotCircle, FaRegDotCircle } from "react-icons/fa";


export interface NotificationInterface {
  id: number;
  message: string;
  read: boolean;
  type: 'request' | 'on_hold' | 'new_feature';
}

interface NotificationProps extends NotificationInterface {
  markAsRead: (id: number, blueDot: boolean) => void
}

const Notification: React.FC<NotificationProps> = ({ id, message, read, type, markAsRead }) => {
  const getLink = () => {
    switch (type) {
      case 'request':
        return '/request';
      case 'on_hold':
        return '/on_hold';
      case 'new_feature':
        return '/new_feature';
      default:
        return '/';
    }
  };

  return (
    <div className={`${styles.notification} ${read ? styles.read : styles.unread}`}>
      <Link to={getLink()} onClick={() => markAsRead(id, false)}>
        {message}
      </Link>
      <button className={`${styles.markUnreadButton}`} onClick={() => markAsRead(id, true)}>
        {read ? <FaRegDotCircle /> : <FaDotCircle />}
      </button>
    </div>
  );
};

export default Notification;
