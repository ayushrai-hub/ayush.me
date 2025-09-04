import React from 'react';
import { renderWithProviders, screen, fireEvent } from '../../tests/utils';
import Navbar from '../Navbar';

describe('Navbar', () => {
  test('renders site title and sections', () => {
    renderWithProviders(<Navbar dark={false} toggleDark={() => {}} />);
    expect(screen.getByText('ayush.me')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /toggle dark mode/i })).toBeInTheDocument();
  });

  test('toggle button calls handler', () => {
    const onToggle = jest.fn();
    renderWithProviders(<Navbar dark={false} toggleDark={onToggle} />);
    fireEvent.click(screen.getByRole('button', { name: /toggle dark mode/i }));
    expect(onToggle).toHaveBeenCalled();
  });
});
