module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'warn',
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
