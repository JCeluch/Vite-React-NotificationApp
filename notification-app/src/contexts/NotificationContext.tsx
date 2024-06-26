// src/contexts/NotificationContext.tsx
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Notification } from '../types';

interface NotificationContextProps {
  notifications: Notification[];
  markAllAsRead: () => void;
  markAsRead: (id: number) => void;
  markAsUnread: (id: number) => void;
  addNotification: (notification: Notification) => void;
  clearNotifications: () => void;
  repopulateNotifications: () => void;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);

const initialNotifications: Notification[] = [
  {id: 1, message: "Jan Nowak from MindPal has requested a Mindocument for their project Minddev", read: false, type: 'request'},
  {id: 2, message: "We have launched new product!", read: false, type: 'new_feature'},
  {id: 3, message: "New MindTool feature: AI Assistant!", read: false, type: 'new_feature'},
  {id: 4, message: "Nickolas Stephands from MindPal has deleted their project SFxGliwice", read: true, type: 'request'},
  {id: 5, message: "Gregory Jones from MindPal has put their project Project 123 on hold", read: true, type: 'on_hold'},
  {id: 6, message: "Lucy Gale from MindPal has requested a Project Revision for their project Gliwice", read: true, type: 'request'},
  {id: 7, message: "You have a new request", read: false, type: 'request'},
  {id: 8, message: "Status changed to on hold", read: true, type: 'on_hold'},
  {id: 9, message: "New feature avaliable!", read: false, type: 'new_feature'},
];

const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>(() => {
    const savedNotifications = localStorage.getItem('notifications');
    return savedNotifications ? JSON.parse(savedNotifications) : initialNotifications;
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

  const clearNotifications = () => {
    setNotifications([]);
    localStorage.removeItem('notifications');
  }

  const repopulateNotifications = () => {
    setNotifications(initialNotifications);
    localStorage.setItem('notifications', JSON.stringify(initialNotifications));
  };

  return (
    <NotificationContext.Provider value={{ notifications, markAllAsRead, markAsRead, markAsUnread, addNotification, clearNotifications, repopulateNotifications }}>
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
