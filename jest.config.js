const nextJest = require('next/jest');

const createJestConfig = nextJest({
    dir: './',
});

const asyncJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules'],
    roots: ['./tests'],
    testEnvironment: 'jsdom',
};

module.exports = createJestConfig(asyncJestConfig);
