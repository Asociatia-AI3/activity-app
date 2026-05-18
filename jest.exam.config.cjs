/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/exam-runner'],
  testMatch: ['**/grade.test.ts'],
  // Generous timeout — some migration sets or large data inserts may be slow.
  testTimeout: 30_000,
};
