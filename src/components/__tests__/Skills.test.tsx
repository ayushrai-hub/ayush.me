import React from 'react';
import { renderWithProviders, screen } from '../../tests/utils';
import Skills from '../Skills';

describe('Skills', () => {
  test('renders heading', () => {
    renderWithProviders(<Skills />);
    expect(screen.getByRole('heading', { name: /skills/i })).toBeInTheDocument();
  });
});
