// src/tests/OnHoldPage.test.tsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import OnHoldPage from '../pages/OnHoldPage';
import { test, expect } from 'vitest';

test('displays the notification message on OnHoldPage', () => {
  render(
    <MemoryRouter initialEntries={[{ pathname: '/on_hold', state: { message: 'Test on hold message' } }]}>
      <Routes>
        <Route path="/on_hold" element={<OnHoldPage />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText('Test on hold message')).toBeInTheDocument();
});
