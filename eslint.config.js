import js from '@eslint/js';
import astroParser from 'astro-eslint-parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig[]} */
const config = [
  {
    ignores: [
      'dist',
      'public',
      'node_modules',
      'eslint.config.js',
      'postcss.config.js',
      '.prettierrc.cjs',
      '.stylelintrc.js',
    ],
  },

  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: eslintPluginReact,
      prettier: eslintPluginPrettier,
      astro: eslintPluginAstro,
    },
  },

  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'no-var': 'error',
      'prefer-const': 'warn',
      'max-lines': ['warn', { max: 500 }],
      'prettier/prettier': ['warn', { endOfLine: 'auto' }],
    },
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'no-var': 'error',
      'prefer-const': 'warn',
      'max-lines': ['warn', { max: 500 }],
      'prettier/prettier': ['warn', { endOfLine: 'auto' }],
    },
  },

  // React rules
  {
    files: ['**/*.{jsx,tsx}'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',
      'react/jsx-no-undef': 'error',
      'react/jsx-key': 'warn',
      'react/self-closing-comp': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // Astro rules
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tseslint.parser,
        // project: ['./tsconfig.json'],
        extraFileExtensions: ['.astro'],
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    processor: eslintPluginAstro.processors['.astro'],
    rules: {
      'astro/no-set-html-directive': 'error',
      'astro/valid-compile': 'error',
      'prettier/prettier': 'warn',
    },
  },

  {
    rules: {
      ...eslintPluginPrettier.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
    },
  },
];

export default config;
