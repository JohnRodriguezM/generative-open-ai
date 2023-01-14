export default{
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.tsx'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};