import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// Suppress React Router future flag warnings
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  unstable_useBlocker: jest.fn(),
  unstable_usePrompt: jest.fn(),
}));

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MemoryRouter 
      initialEntries={["/"]}
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      {children}
    </MemoryRouter>
  );
};

export const renderWithProviders = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
