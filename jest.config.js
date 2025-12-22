module.exports = {
  testEnvironment: 'jest-environment-jsdom',

  testMatch: ['**/__tests__/**/*.test.js'],

  transform: {
    '^.+\\.js$': 'babel-jest',
  },

  moduleFileExtensions: ['js'],

  collectCoverage: true,
  coverageDirectory: 'coverage',

  testPathIgnorePatterns: ['/node_modules/', '/dist/'],

  globals: {
    'jsdom': {
      url: 'http://localhost:9000',
    },
  },
};
