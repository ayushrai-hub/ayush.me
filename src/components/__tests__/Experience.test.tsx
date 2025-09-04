import React from 'react';
import { renderWithProviders, screen } from '../../tests/utils';
import Experience from '../Experience';

describe('Experience', () => {
  test('renders heading', () => {
    renderWithProviders(<Experience />);
    expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument();
  });
});
