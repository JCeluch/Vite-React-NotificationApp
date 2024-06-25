// src/components/NotificationsModal.tsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './NotificationsModal.module.scss';
import Notification, {NotificationInterface} from './Notification';

interface NotificationsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  notifications: NotificationInterface[];
  markAllAsRead: () => void;
  markAsRead: (id: number) => void;
}

const NotificationsModal: React.FC<NotificationsModalProps> = ({
  isOpen,
  onRequestClose,
  notifications,
  markAllAsRead,
  markAsRead
}) => {
  const [view, setView] = useState<'all' | 'unread'>('all');

  const filteredNotifications = view === 'all'
    ? notifications
    : notifications.filter(notification => !notification.read);

  const onMarkAsRead = (id: number, blueDot: boolean) => {
    markAsRead(id);
    !blueDot && onRequestClose();
  }

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
          <Notification
            key={notification.id}
            id={notification.id}
            message={notification.message}
            read={notification.read}
            type={notification.type}
            markAsRead={onMarkAsRead}
          />
        ))}
      </div>
    </Modal>
  );
};

export default NotificationsModal;
