import React from 'react';
import { renderWithProviders, screen } from '../../tests/utils';
import Projects from '../Projects';

describe('Projects', () => {
  test('renders heading', () => {
    renderWithProviders(<Projects />);
    expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument();
  });
});
