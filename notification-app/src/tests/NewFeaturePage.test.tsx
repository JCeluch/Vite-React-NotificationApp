// src/tests/OnHoldPage.test.tsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import NewFeaturePage from '../pages/NewFeaturePage';
import { test, expect } from 'vitest';

test('displays the notification message on NewFeature', () => {
  render(
    <MemoryRouter initialEntries={[{ pathname: '/new_feature', state: { message: 'Test new feature message' } }]}>
      <Routes>
        <Route path="/new_feature" element={<NewFeaturePage />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText('Test new feature message')).toBeInTheDocument();
});
