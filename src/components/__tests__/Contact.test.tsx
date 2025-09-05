import React from 'react';
import { renderWithProviders, screen } from '../../tests/utils';
import Contact from '../Contact';

describe('Contact', () => {
  test('renders heading', () => {
    renderWithProviders(<Contact />);
    expect(screen.getByRole('heading', { name: /connect.*collaborate/i })).toBeInTheDocument();
  });
});
