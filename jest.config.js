module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|ts|tsx)$': require.resolve('react-native/jest/preprocessor.js'),
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!web/**/*.{js,jsx,ts,tsx}',
    '!web-build/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
  ],
  coverageThreshold: {
    global: {
      statements: 0.2,
      branches: 0.2,
      functions: 0.2,
      lines: 0.2,
    },
  },
  moduleFileExtensions: [ 'js', 'jsx', 'ts', 'tsx' ],
  moduleDirectories: [ 'node_modules', 'src' ],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': 'identity-obj-proxy',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/mocks/image.js',
  },
  testRegex: '__tests__/.*\\.test\\.tsx?$',
};
