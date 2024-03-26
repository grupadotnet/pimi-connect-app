import type { Config } from 'jest';

export default async (): Promise<Config> => {
  return {
    preset: '@testing-library/react-native',
    testEnvironment: 'node',
    moduleDirectories: ['node_modules', '<rootDir>/'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
  };
};
