import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default function useAnalytics() {
  useEffect(() => {
    // Google Analytics 4 initialization
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || 'GA-MEASUREMENT-ID';

    if (measurementId !== 'GA-MEASUREMENT-ID') {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', measurementId, {
        anonymize_ip: true,
        allow_ad_features: false,
      });

      // Track initial page view
      gtag('event', 'page_view', {
        page_path: window.location.pathname,
        page_title: document.title,
      });
    }

    // Development logging
    if (import.meta.env.DEV) {
      console.log('[Analytics] Initialized', { measurementId });
    }
  }, []);
}

// Custom analytics functions
export const trackEvent = (
  eventName: string,
  parameters: Record<string, any> = {}
) => {
  if (window.gtag) {
    window.gtag('event', eventName, parameters);
  }

  if (import.meta.env.DEV) {
    console.log('[Analytics] Event tracked:', eventName, parameters);
  }
};

export const trackContactForm = (contactType: string) => {
  trackEvent('contact_form_submission', {
    contact_type: contactType,
    timestamp: new Date().toISOString(),
  });
};

export const trackResumeDownload = () => {
  trackEvent('resume_download', {
    source: 'hero_section',
    timestamp: new Date().toISOString(),
  });
};

export const trackSectionView = (sectionName: string) => {
  trackEvent('section_view', {
    section: sectionName,
    timestamp: new Date().toISOString(),
  });
};
