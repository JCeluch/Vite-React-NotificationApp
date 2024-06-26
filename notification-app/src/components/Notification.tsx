// src/components/Notification.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Notification.module.scss';
import { FaDotCircle, FaRegDotCircle } from "react-icons/fa";
import { Notification as NotificationInterface } from '../types';
import { useNotifications } from '../contexts/NotificationContext';

interface NotificationProps extends NotificationInterface {
  markAsRead: (id: number, blueDot: boolean) => void;
}

const Notification: React.FC<NotificationProps> = ({ id, message, read, type, markAsRead }) => {
  const { markAsUnread } = useNotifications();

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
      <Link to={getLink()} state={{message}} onClick={() => markAsRead(id, false)}>
        {message}
      </Link>
      <button data-testid="mark-as-read-button" className={`${styles.markUnreadButton}`} onClick={() => read ? markAsUnread(id) : markAsRead(id, true)}>
        {read ? <FaRegDotCircle /> : <FaDotCircle />}
      </button>
    </div>
  );
};

export default Notification;
