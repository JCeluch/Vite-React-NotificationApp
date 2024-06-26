// src/tests/Notification.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Notification from '../components/Notification';
import { NotificationProvider } from '../contexts/NotificationContext';
import { describe, test, expect, vi } from 'vitest';

let id = 1;

const notification = {
  id: 1,
  message: 'This is a test notification',
  read: false,
  type: 'request' as const,
};

describe('Notification Component', () => {
  test('renders notification message', () => {
    render(
      <NotificationProvider>
        <MemoryRouter>
          <Notification key={id++} markAsRead={function (id: number, blueDot: boolean): void {
            throw new Error('Function not implemented.');
          } } {...notification} />
        </MemoryRouter>
      </NotificationProvider>
    );
    expect(screen.getByText(/This is a test notification/i)).toBeInTheDocument();
  });

  test('marks notification as read when clicked', () => {
    const markAsReadMock = vi.fn();
    render(
      <NotificationProvider>
        <MemoryRouter>
          <Notification key={id++} markAsRead={markAsReadMock} {...notification} />
        </MemoryRouter>
      </NotificationProvider>
    );
    const markReadButton = screen.getByRole('button');
    fireEvent.click(markReadButton);
    expect(markAsReadMock).toHaveBeenCalledTimes(1);
  });
  
  test('marks notification as unread when clicked', () => {
    const markAsUnreadMock = vi.fn();
    render(
      <NotificationProvider>
        <MemoryRouter>
          <Notification key={id++} markAsRead={markAsUnreadMock} {...notification} />
        </MemoryRouter>
      </NotificationProvider>
    );
    const markUnreadButton = screen.getByRole('button');
    fireEvent.click(markUnreadButton);
    expect(markAsUnreadMock).toHaveBeenCalledTimes(1);
  });
});
