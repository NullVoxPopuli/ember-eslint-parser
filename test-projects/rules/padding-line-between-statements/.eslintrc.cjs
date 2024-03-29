'use strict';

module.exports = {
  root: true,
  overrides: [
    {
      files: ['**/*.{js,ts}'],
      plugins: ['ember'],
      parser: '@typescript-eslint/parser',
      extends: ['eslint:recommended', 'plugin:ember/recommended'],
    },
    {
      files: ['**/*.gts'],
      parser: 'ember-eslint-parser',
      plugins: ['ember'],
      extends: ['eslint:recommended', 'plugin:ember/recommended', 'plugin:ember/recommended-gts'],
      rules: {
        'padding-line-between-statements': [
          'error',
          {
            blankLine: 'always',
            prev: '*',
            next: 'return',
          },
          {
            blankLine: 'always',
            prev: '*',
            next: 'break',
          },
          {
            blankLine: 'always',
            prev: '*',
            next: 'block-like',
          },
          {
            blankLine: 'always',
            prev: 'block-like',
            next: '*',
          },
          {
            blankLine: 'always',
            prev: ['const', 'let'],
            next: '*',
          },
          {
            blankLine: 'always',
            prev: '*',
            next: ['const', 'let'],
          },
          {
            blankLine: 'any',
            prev: ['const', 'let'],
            next: ['const', 'let'],
          },
          {
            blankLine: 'any',
            prev: ['*'],
            next: ['case'],
          },
        ],
      },
    },
    {
      files: ['**/*.gjs'],
      parser: 'ember-eslint-parser',
      plugins: ['ember'],
      extends: ['eslint:recommended', 'plugin:ember/recommended', 'plugin:ember/recommended-gjs'],
    },
  ],
};
