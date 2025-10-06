import { addDynamicIconSelectors } from '@iconify/tailwind';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import fluid, { extract, fontSize, screens } from 'fluid-tailwind';
import type { Config } from 'tailwindcss';
import tailwindAnimate from 'tailwindcss-animate';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: ['class'],
  content: {
    files: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],

    /**
     * Add extractor.
     * The custom extractor lets you use the new ~ modifier in your Tailwind classes.
     *
     * @see https://tailwindcss.com/docs/content-configuration#customizing-extraction-logic
     */
    extract,
  },

  future: {
    disableColorOpacityUtilitiesByDefault: true,

    // Disable hover styles on mobile with Tailwind CSS
    hoverOnlyWhenSupported: true,
  },

  plugins: [
    /**
     * The official Tailwind CSS Typography plugin provides a set of prose classes you can use to add
     * beautiful typographic defaults to any vanilla HTML you don’t control, like HTML rendered from
     * Markdown, or pulled from a CMS.
     *
     * @see https://github.com/tailwindlabs/tailwindcss-typography
     */
    typography({
      className: 'prose',
    }),

    /**
     * A plugin that provides a basic reset for form styles that makes form elements easy to override with utilities.
     *
     * @see https://github.com/tailwindlabs/tailwindcss-forms
     */
    forms({
      strategy: 'class', // only generate classes
    }),

    /**
     * Add the plugin Fluid for Tailwind CSS
     *
     * @see https://fluid.tw
     */
    fluid,

    // Iconify plugin for dynamic selectors, configuration is not required
    // Icons usage in HTML:
    //  <span class="i-[mdi-light--home]"></span>
    addDynamicIconSelectors(),
    tailwindAnimate,
  ],

  corePlugins: {
    // Tailwind's base/reset styles
    preflight: true,
  },

  theme: {
    // Tailwind's default font sizes, in `rem` (including line heights)
    fontSize,

    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },

    extend: {
      screens: {
        // Tailwind's default screens, in `rem`
        ...screens,
        // '3xl': '108rem' /* 1728px */,
      },

      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
        glass: {
          bg: 'hsl(var(--glass-bg))',
          border: 'hsl(var(--glass-border))',
        },

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      /**
       * Add custom spacing values.
       * name(size * 4): size (in rem)
       */
      spacing: {},

      fontFamily: {
        sans: ['"var(--font-inter)"', ...defaultTheme.fontFamily.sans],
      },

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
};

export default config;
