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

  // Mock requestAnimationFrame
  global.requestAnimationFrame = (callback) => {
    return window.setTimeout(callback, 0);
  };
  global.cancelAnimationFrame = (id) => {
    clearTimeout(id);
  };

  // Suppress React 18 useEffect warnings in tests
  const originalError = console.error;
  console.error = (...args) => {
    if (
      /Warning: React does not recognize the.*prop on a DOM element/.test(
        args[0]
      ) ||
      /Warning: Received `%s` for a non-boolean attribute `%s`/.test(args[0]) ||
      /Warning: validateDOMNesting/.test(args[0]) ||
      /Warning: useLayoutEffect does nothing on the server/.test(args[0])
    ) {
      return;
    }
    originalError(...args);
  };
});

// Mock framer-motion components to avoid animation issues in tests
jest.mock('framer-motion', () => {
  const motionProxy = new Proxy({}, {
    get: (target, property) => {
      return ({ children, ...props }: any) => React.createElement(property as string, props, children);
    },
  });

  return {
    motion: motionProxy,
    AnimatePresence: ({ children }: { children: React.ReactNode }) =>
      React.createElement(React.Fragment, null, children),
  };
});

// Mock react-type-animation
jest.mock('react-type-animation', () => ({
  TypeAnimation: ({ sequence, wrapper = 'span', ...props }: any) => {
    // Just render the first non-number item in the sequence for testing
    const text = sequence.find((item: any) => typeof item === 'string');
    return React.createElement(wrapper, props, text || '');
  },
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
  }) =>
    React.createElement('div', { 'data-testid': 'vertical-timeline-element', ...props }, children),
}));

afterAll(() => {
  // Restore original console methods
  console.warn = originalConsoleWarn;
  console.error = originalConsoleError;
});

afterEach(() => {
  jest.clearAllMocks();
});
