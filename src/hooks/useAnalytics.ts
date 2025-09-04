import { useEffect } from 'react';

export default function useAnalytics() {
  useEffect(() => {
    // Placeholder for GA4 or other analytics provider.
    // In production, load measurement ID from env and initialize.
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.log('[Analytics] Page view', { path: window.location.pathname });
    }
  }, []);
}
