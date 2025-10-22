import React from 'react';

import logo from '@/assets/images/logo.svg';

interface Props {
  className?: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
}

const basePath = (import.meta.env.BASE_URL ?? '').replace(/\/$/, '');
const siteName = (import.meta.env.SITE_NAME as string) ?? 'Sound & Staff';

export default function Logo({ className, alt, width, height }: Props) {
  return (
    <a href={`${basePath}/`} aria-label={siteName}>
      <img
        src={logo.src}
        alt={alt ?? siteName}
        className={className}
        width={width ?? logo.width}
        height={height ?? logo.height}
        loading='eager'
        decoding='async'
        role='img'
      />
    </a>
  );
}
