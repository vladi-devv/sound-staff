/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    /**
     * This wraps postcss-nested or postcss-nesting and
     * adds compatibility for Tailwind functions
     *
     * @see https://tailwindcss.com/docs/using-with-preprocessors#nesting
     */
    'tailwindcss/nesting': {},

    /**
     * Utility-first CSS framework that scans all of our files, and only
     * generate styles and classes that we use.
     *
     * @see https://tailwindcss.com/docs/installation
     */
    tailwindcss: { config: './tailwind.config.ts' },

    /**
     * Plugin to parse CSS and add prefixes to CSS rules using
     * values from Can I Use.
     *
     * @see https://github.com/postcss/autoprefixer
     */
    autoprefixer: {},
  },
};

export default config;
