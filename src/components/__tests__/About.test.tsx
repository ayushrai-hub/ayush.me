import React from 'react';
import { renderWithProviders, screen } from '../../tests/utils';
import About from '../About';

describe('About', () => {
  test('renders heading', () => {
    renderWithProviders(<About />);
    expect(screen.getByRole('heading', { name: /seeker of growth/i })).toBeInTheDocument();
  });
});
