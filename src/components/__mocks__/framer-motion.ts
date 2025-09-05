// Mock implementation that renders children directly without animations
const mock = {
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    // Add other motion components as needed
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  // Add other framer-motion exports as needed
};

export const motion = mock.motion;
export const AnimatePresence = mock.AnimatePresence;

export default mock;
