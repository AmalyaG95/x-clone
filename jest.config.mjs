import nextJest from 'next/jest.js';

const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
  testEnvironment: 'jest-fixed-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/$1' },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,

      lines: 80,
      statements: -10,
    },
  },
  transformIgnorePatterns: [
    'node_modules/(?!(msw|@mswjs|until-async)/)', // 👈 transpile ESM deps
  ],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest', // 👈 let Babel handle everything
  },
};

export default await createJestConfig(customJestConfig)();
