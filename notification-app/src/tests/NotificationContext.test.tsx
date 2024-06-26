// src/NotificationContext.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { useNotifications, NotificationProvider } from '../contexts/NotificationContext';
import { describe, test, expect } from 'vitest';

let id = 1;

const TestComponent = () => {
  const { notifications, addNotification, markAllAsRead, markAsRead, markAsUnread, clearNotifications, repopulateNotifications } = useNotifications();

  return (
    <div>
      <button onClick={() => addNotification({ id: id++, message: 'Test Notification', read: false, type: 'request' })}>
        Add Notification
      </button>
      <button onClick={() => addNotification({ id: id++, message: 'Test Read Notification', read: true, type: 'request' })}>
        Add Read Notification
      </button>
      <button onClick={() => addNotification({ id: id++, message: 'Test Unread Notification', read: false, type: 'request' })}>
        Add Unread Notification
      </button>
      <button onClick={markAllAsRead}>Mark All as Read</button>
      <button onClick={clearNotifications}>Clear Notifications</button>
      <button onClick={repopulateNotifications}>Repopulate Notifications</button>
      <ul data-testid="notifications-list">
        {notifications.map((notification) => (
          <li key={notification.id}>
            {notification.message} - {notification.read ? 'Read' : 'Unread'}
            <button onClick={() => markAsRead(notification.id)}>Mark as Read</button>
            <button onClick={() => markAsUnread(notification.id)}>Mark as Unread</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

describe('NotificationContext', () => {
  test('adds a notification', () => {
    render(
      <NotificationProvider>
        <TestComponent />
      </NotificationProvider>
    );

    const addButton = screen.getByText(/Add Unread Notification/i);
    fireEvent.click(addButton);
    expect(screen.getByText(/Test Unread Notification/i)).toBeInTheDocument();
    const clearButton = screen.getByText(/Clear Notifications/i);
    fireEvent.click(clearButton);
  });

  test('marks all notifications as read', () => {
    render(
      <NotificationProvider>
        <TestComponent />
      </NotificationProvider>
    );

    const addButton = screen.getByText(/Add Unread Notification/i);
    fireEvent.click(addButton);

    const markAllButton = screen.getByText(/Mark All as Read/i);
    fireEvent.click(markAllButton);

    expect(screen.getByText(/Test Unread Notification/i)).toHaveTextContent('Read');
    const clearButton = screen.getByText(/Clear Notifications/i);
    fireEvent.click(clearButton);
  });

  test('marks a notification as read', () => {
    render(
      <NotificationProvider>
        <TestComponent />
      </NotificationProvider>
    );

    const addButton = screen.getByText(/Add Unread Notification/i);
    fireEvent.click(addButton);

    const markAsReadButton = screen.getByText(/Mark as Read/i);
    fireEvent.click(markAsReadButton);

    expect(screen.getByText(/Test Unread Notification/i)).toHaveTextContent('Read');
    const clearButton = screen.getByText(/Clear Notifications/i);
    fireEvent.click(clearButton);
  });
  
  test('marks a notification as unread', () => {
    render(
      <NotificationProvider>
        <TestComponent />
      </NotificationProvider>
    );

    const addButton = screen.getByText(/Add Read Notification/i);
    fireEvent.click(addButton);

    const markAsUnreadButton = screen.getByText(/Mark as Unread/i);
    fireEvent.click(markAsUnreadButton);

    expect(screen.getByText(/Test Read Notification/i)).toHaveTextContent('Unread');
    const clearButton = screen.getByText(/Clear Notifications/i);
    fireEvent.click(clearButton);
  });

  test('clear all notifications', () => {
    render(
      <NotificationProvider>
        <TestComponent />
      </NotificationProvider>
    );

    const addButton = screen.getByText(/Add Notification/i);
    fireEvent.click(addButton);
    
    const clearButton = screen.getByText(/Clear Notifications/i);
    fireEvent.click(clearButton);

    expect(screen.queryByText(/Test Notifications/i)).not.toBeInTheDocument();
  })
  
  test('repopulate notifications', () => {
    render(
      <NotificationProvider>
        <TestComponent />
      </NotificationProvider>
    );

    const clearButton = screen.getByText(/Clear Notifications/i);
    fireEvent.click(clearButton);
    
    const repopulateButton = screen.getByText(/Repopulate Notifications/i);
    fireEvent.click(repopulateButton);

    expect(screen.getByText(/Jan Nowak from MindPal has requested a Mindocument for their project Minddev/i)).toBeInTheDocument();
  })
});
