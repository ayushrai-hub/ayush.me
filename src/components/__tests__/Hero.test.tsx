import React from 'react';
import { renderWithProviders, screen } from '../../tests/utils';
import Hero from '../Hero';

describe('Hero', () => {
  test('renders name and action buttons', () => {
    renderWithProviders(<Hero />);
    expect(screen.getByRole('heading', { name: /ayush rai/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /download resume/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact me/i })).toBeInTheDocument();
  });
});
