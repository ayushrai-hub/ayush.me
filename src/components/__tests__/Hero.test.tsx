import React from 'react';
import { renderWithProviders, screen } from '../../tests/utils';
import Hero from '../Hero';

describe('Hero', () => {
  test('renders name and action buttons', () => {
    renderWithProviders(<Hero />);
    
    // Check for name
    expect(screen.getByRole('heading', { name: /ayush rai/i })).toBeInTheDocument();
    
    // Check for type animation text (first string from the sequence)
    expect(screen.getByText(/ai engineer/i)).toBeInTheDocument();
    
    // Check for action buttons
    expect(screen.getByRole('link', { name: /download resume/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact me/i })).toBeInTheDocument();
    
    // Check for social links
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument();
  });
});
