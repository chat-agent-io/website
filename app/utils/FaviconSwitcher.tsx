'use client';

import { useEffect } from 'react';

export function FaviconSwitcher() {
  useEffect(() => {
    const setFavicon = (isDark: boolean) => {
      const existingFavicon = document.querySelector('link[rel="icon"]');
      if (existingFavicon) {
        existingFavicon.remove();
      }

      const favicon = document.createElement('link');
      favicon.rel = 'icon';
      favicon.type = 'image/x-icon';
      favicon.href = isDark ? '/favicon-dark.ico' : '/favicon-light.ico';

      document.head.appendChild(favicon);
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setFavicon(mediaQuery.matches);

    // Listen for changes
    const handleChange = (e: MediaQueryListEvent) => {
      setFavicon(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return null;
}
