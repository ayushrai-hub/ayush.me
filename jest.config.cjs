/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^react-type-animation$': '<rootDir>/src/components/__mocks__/react-type-animation.ts',
    '^framer-motion$': '<rootDir>/src/components/__mocks__/framer-motion.ts',
  },
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      { tsconfig: '<rootDir>/tsconfig.jest.json', useESM: true }
    ],
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleDirectories: ['node_modules', 'src'],
};
