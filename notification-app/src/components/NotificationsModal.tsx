// src/components/NotificationsModal.tsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from '../styles/NotificationsModal.module.scss';
import Notification from './Notification';
import { useNotifications } from '../contexts/NotificationContext';

interface NotificationsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NotificationsModal: React.FC<NotificationsModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const [view, setView] = useState<'all' | 'unread'>('all');
  const { notifications, markAllAsRead, markAsRead } = useNotifications();

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
      overlayClassName={styles.modalOverlay}
    >
      <div className={styles.header}>
        <button onClick={() => setView('all')}>All Notifications</button>
        <button onClick={() => setView('unread')}>Unread Notifications</button>
        <button onClick={markAllAsRead}>Mark all as read</button>
      </div>
      <div className={styles.content}>
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
