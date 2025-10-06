/**
 * @type {import("prettier").Config}
 */
module.exports = {
  tailwindConfig: './tailwind.config.ts',

  plugins: [
    require.resolve('prettier-plugin-astro'),
    require.resolve('prettier-plugin-tailwindcss'),
    require.resolve('@trivago/prettier-plugin-sort-imports'),
    require.resolve('prettier-plugin-merge'),
  ],

  useTabs: false,
  tabWidth: 2,
  printWidth: 80,
  trailingComma: 'es5',
  singleQuote: true,
  bracketSameLine: false,
  semi: true,
  arrowParens: 'avoid',
  jsxSingleQuote: true,
  bracketSpacing: true,
  endOfLine: 'lf',

  overrides: [
    {
      files: '*.{css,sass,scss,pcss,postcss}',
      options: {
        singleQuote: false,
      },
    },
    {
      files: '**/*.ejs',
      options: {
        parser: 'html',
      },
    },
  ],

  importOrder: [
    '^@core/(.*)$',
    '^@server/(.*)$',
    '^@ui/(.*)$',
    '^../(.*)',
    '^./(.*)',
  ],

  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
