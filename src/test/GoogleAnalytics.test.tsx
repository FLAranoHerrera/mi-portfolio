import { StrictMode } from 'react';
import { render, cleanup } from '@testing-library/react';
import { afterEach, expect, it } from 'vitest';
import GoogleAnalytics from '@/components/GoogleAnalytics';

afterEach(() => {
  cleanup();
  document.getElementById('portfolio-analytics')?.remove();
  delete window.dataLayer;
  delete window.portfolioAnalyticsId;
});

it('does not load analytics for an unset or placeholder ID', () => {
  const { rerender } = render(<GoogleAnalytics measurementId="" />);
  rerender(<GoogleAnalytics measurementId="G-XXXXXXXXXX" />);
  expect(document.getElementById('portfolio-analytics')).toBeNull();
  expect(window.dataLayer).toBeUndefined();
});

it('initializes once in StrictMode and queues the configuration', () => {
  render(<StrictMode><GoogleAnalytics measurementId="G-ABC123" /></StrictMode>);
  expect(document.querySelectorAll('#portfolio-analytics')).toHaveLength(1);
  expect(window.dataLayer?.map(command => Array.from(command as IArguments))).toEqual([
    ['js', expect.any(Date)], ['config', 'G-ABC123'],
  ]);
});
