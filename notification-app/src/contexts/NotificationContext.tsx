// src/contexts/NotificationContext.tsx
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Notification } from '../types';

interface NotificationContextProps {
  notifications: Notification[];
  markAllAsRead: () => void;
  markAsRead: (id: number) => void;
  markAsUnread: (id: number) => void;
  addNotification: (notification: Notification) => void;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);

const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>(() => {
    const savedNotifications = localStorage.getItem('notifications');
    return savedNotifications ? JSON.parse(savedNotifications) : [];
  });

  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [notifications]);

  const markAllAsRead = () => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification => ({ ...notification, read: true }))
    );
  };

  const markAsRead = (id: number) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };
  
  const markAsUnread = (id: number) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id ? { ...notification, read: false } : notification
      )
    );
  };

  const addNotification = (notification: Notification) => {
    setNotifications(prevNotifications => [...prevNotifications, notification]);
  };

  return (
    <NotificationContext.Provider value={{ notifications, markAllAsRead, markAsRead, markAsUnread, addNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

const useNotifications = (): NotificationContextProps => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};

export { NotificationProvider, useNotifications };
