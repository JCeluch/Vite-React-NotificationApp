// src/tests/RequestPage.test.tsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import RequestPage from '../pages/RequestPage';
import { test, expect } from 'vitest';

test('displays the notification message on RequestPage', () => {
  render(
    <MemoryRouter initialEntries={[{ pathname: '/request', state: { message: 'Test request message' } }]}>
      <Routes>
        <Route path="/request" element={<RequestPage />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText('Test request message')).toBeInTheDocument();
});
