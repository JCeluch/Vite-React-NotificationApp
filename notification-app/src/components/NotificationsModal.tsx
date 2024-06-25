// src/components/NotificationsModal.tsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './NotificationsModal.module.scss';

interface Notification {
  id: number;
  message: string;
  read: boolean;
}

interface NotificationsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  notifications: Notification[];
  markAllAsRead: () => void;
}

const NotificationsModal: React.FC<NotificationsModalProps> = ({
  isOpen,
  onRequestClose,
  notifications,
  markAllAsRead
}) => {
  const [view, setView] = useState<'all' | 'unread'>('all');

  const filteredNotifications = view === 'all'
    ? notifications
    : notifications.filter(notification => !notification.read);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.header}>
        <button onClick={() => setView('all')} className={view === 'all' ? styles.active : ''}>All Notifications</button>
        <button onClick={() => setView('unread')} className={view === 'unread' ? styles.active : ''}>Unread Notifications</button>
        <button onClick={markAllAsRead} className={styles.markAllAsRead}>Mark all as read</button>
      </div>
      <div className={styles.notificationsList}>
        {filteredNotifications.map(notification => (
          <div key={notification.id} className={`${styles.notification} ${notification.read ? styles.read : styles.unread}`}>
            {notification.message}
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default NotificationsModal;
