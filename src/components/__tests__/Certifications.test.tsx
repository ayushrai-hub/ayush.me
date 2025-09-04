import React from 'react';
import { renderWithProviders, screen } from '../../tests/utils';
import Certifications from '../Certifications';

describe('Certifications', () => {
  test('renders heading', () => {
    renderWithProviders(<Certifications />);
    expect(screen.getByRole('heading', { name: /certifications/i })).toBeInTheDocument();
  });
});
