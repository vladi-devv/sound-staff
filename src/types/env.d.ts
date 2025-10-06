/// <reference types="astro/client" />

// interface ImportMetaEnv {
//   readonly PUBLIC_API_URL: string;
//   readonly PRIVATE_KEY?: string;
// }

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
