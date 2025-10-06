// @ts-check
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig, fontProviders } from 'astro/config';
import { fileURLToPath } from 'node:url';
import { loadEnv } from 'vite';

/** @type {string} */
const mode = process.env.NODE_ENV ?? 'development'; // fallback
const env = loadEnv(mode, process.cwd(), '');

/** @param {string|undefined} v @returns {string|undefined} */
const unwrap = v =>
  typeof v === 'string' ? v.replace(/^['"]?(.*)['"]?$/, '$1') : v;

const SITE = unwrap(env.SITE ?? process.env.SITE);
const BASE = unwrap(env.BASE ?? process.env.BASE);

const __dirname = fileURLToPath(new URL('.', import.meta.url));

/** @type {import('astro').AstroUserConfig} */
const config = {
  site: SITE || undefined,
  base: BASE ? `/${BASE.replace(/^\/|\/$/g, '')}/` : '/',
  output: 'static',
  build: { assets: 'assets' },
  integrations: [tailwind(), react()],
  experimental: {
    fonts: [
      {
        name: 'Inter',
        cssVariable: '--font-inter',
        provider: fontProviders.google(),
        weights: ['100 900'],
        styles: ['normal', 'italic'],
        subsets: ['cyrillic-ext', 'cyrillic', 'latin-ext', 'latin'],
        fallbacks: ['sans-serif'],
        display: 'swap',
      },
    ],
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        formats: ['avif', 'webp', 'png', 'jpg'],
        quality: 75,
        placeholder: 'blur',
        cacheDir: '.astro/image-cache',
        minimumCacheTTL: 60 * 60 * 24 * 7,
      },
    },
    domains: ['images.unsplash.com', 'res.cloudinary.com', 'cdn.sanity.io'],
  },
};

export default defineConfig(config);
