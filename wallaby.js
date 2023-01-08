module.exports = (wallaby) => {
  return {
    files: [
      { pattern: '.env.local', instrument: false },
      '*config.js',
      'api/**/*.js',
      'api/**/*.json',
      'cache.js',
      'contexts/**/*.js',
      'constants/**/*.js',
      'components/**/*.js',
      'components/**/*.json',
      'hooks/**/*.js',
      'iocContainer.js',
      'logging/**/*.js',
      'mocks/**/*.js',
      'models/**/*.js',
      'pages/**/*.js',
      'private/**/*.js',
      'search/**/*.js',
      'services/**/*.js',
      'tests/**/*.js',
      'utils/**/*.js',
      '!/**/*.{test,stories}.js',
      '!.next/**/*.js',
    ],

    tests: [
      'components/**/*.test.js',
      'pages/**/*.test.js',
      'tests/**/*.test.js',
    ],

    testFramework: 'jest',

    env: {
      type: 'node',
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        babel: require('@babel/core'),
        presets: ['@babel/env', '@babel/react'],
        plugins: [
          '@babel/plugin-transform-runtime',
          '@babel/plugin-proposal-class-properties',
        ],
      }),
    },

    debug: true,
    trace: true,
  };
};
