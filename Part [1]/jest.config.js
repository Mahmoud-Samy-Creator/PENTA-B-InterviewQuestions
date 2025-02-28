export const testEnvironment = 'node';
export const collectCoverage = true;
export const coverageThreshold = {
    global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80
    }
};
export const collectCoverageFrom = [
    '**/*.js',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!jest.config.js',
];