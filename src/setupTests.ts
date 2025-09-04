import React from 'react';
import '@testing-library/jest-dom';

// Store original console methods
const originalConsoleWarn = console.warn;
const originalConsoleError = console.error;

// Mock browser APIs
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});

beforeAll(() => {
  // Setup IntersectionObserver mock
  window.IntersectionObserver = mockIntersectionObserver;

  // Mock matchMedia
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  // Suppress React 18 act() warnings
  jest.spyOn(console, 'error').mockImplementation((...args) => {
    // Ignore React 18 act() warnings and specific React Router warnings
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('Warning: An update to %s inside a test was not wrapped in act') ||
        args[0].includes('Warning: ReactDOM.render is no longer supported in React 18'))
    ) {
      return;
    }
    originalConsoleError(...args);
  });

  // Suppress React Router future flag warnings
  jest.spyOn(console, 'warn').mockImplementation((...args) => {
    if (typeof args[0] === 'string' && args[0].includes('React Router Future Flag')) {
      return;
    }
    originalConsoleWarn(...args);
  });
});

// Mock framer-motion components to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => React.createElement('div', props, children),
    // Add other motion components as needed
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => 
    React.createElement(React.Fragment, null, children),
}));

// Mock react-vertical-timeline-component with proper prop handling
jest.mock('react-vertical-timeline-component', () => ({
  VerticalTimeline: ({ children }: { children: React.ReactNode }) =>
    React.createElement('div', { 'data-testid': 'vertical-timeline' }, children),
  VerticalTimelineElement: ({
    children,
    contentStyle,
    contentArrowStyle,
    iconStyle,
    icon,
    ...props
  }: {
    children: React.ReactNode;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties;
    iconStyle?: React.CSSProperties;
    icon?: React.ReactNode;
    [key: string]: any;
  }) => {
    const safeProps = { ...props };
    delete safeProps.animate;
    delete safeProps.className;
    
    return React.createElement(
      'div',
      {
        ...safeProps,
        'data-testid': 'timeline-element',
        'data-content-style': contentStyle ? 'has-content-style' : undefined,
        'data-content-arrow-style': contentArrowStyle ? 'has-arrow-style' : undefined,
        'data-icon-style': iconStyle ? 'has-icon-style' : undefined,
      },
      [
        icon && React.createElement('div', { key: 'icon', 'data-testid': 'timeline-icon' }, icon),
        children,
      ].filter(Boolean)
    );
  },
}));

afterAll(() => {
  // Restore original console methods
  console.warn = originalConsoleWarn;
  console.error = originalConsoleError;
});
