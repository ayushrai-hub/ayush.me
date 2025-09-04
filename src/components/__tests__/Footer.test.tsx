import React from 'react';
import { renderWithProviders, screen } from '../../tests/utils';
import Footer from '../Footer';

describe('Footer', () => {
  test('renders copyright', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument();
  });
});
