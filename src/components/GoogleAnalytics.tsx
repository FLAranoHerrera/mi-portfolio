import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer?: unknown[];
    portfolioAnalyticsId?: string;
  }
}

export default function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  useEffect(() => {
    if (!/^G-[A-Z0-9]+$/.test(measurementId) || measurementId === 'G-XXXXXXXXXX') return;
    // Queue commands in the format expected by gtag; initialize once across StrictMode remounts.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function gtag(..._args: unknown[]) {
      window.dataLayer ??= [];
      // gtag expects an Arguments object for each queued command.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    }
    if (window.portfolioAnalyticsId !== measurementId) {
      document.getElementById('portfolio-analytics')?.remove();
      const script = document.createElement('script');
      script.id = 'portfolio-analytics';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);
      gtag('js', new Date());
      gtag('config', measurementId);
      window.portfolioAnalyticsId = measurementId;
    }
    // Enhanced Measurement may track history changes; avoid sending duplicate manual page views.
  }, [measurementId]);
  return null;
}
