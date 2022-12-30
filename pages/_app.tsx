import { AppProps } from 'next/app';
import NextHead from 'next/head';
import { Analytics } from '@vercel/analytics/react';

import globalStyles from '../styles/globalStyles';

import '../styles/fonts.css';
import { ThemeProvider } from '/contexts/Theme';
import { DefaultSeo } from '/components/Seo';
import siteConfig from '/config/site.mjs';

const App = ({ Component, pageProps }: AppProps) => {
  globalStyles();
  return (
    <>
      <NextHead>
        {/* Favicon */}
        <link rel='icon' href='/static/favicons/favicon.svg' type='image/svg+xml' />
        <link rel='apple-touch-icon' sizes='180x180' href='/static/favicons/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/static/favicons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/static/favicons/favicon-16x16.png' />
        <link rel='icon' href='/static/favicons/favicon.ico' sizes='any' />
        <link rel='manifest' href='/static/favicons/site.webmanifest' />
        <meta name='theme-color' media='(prefers-color-scheme: light)' content='hsl(0, 0%, 100%)' />
        <meta name='theme-color' media='(prefers-color-scheme: dark)' content='hsl(0, 0%, 8%)' />

        {/* RSS */}
        <link rel='alternate' type='application/rss+xml' href={siteConfig.rss.urlExtended} title={siteConfig.title} />

        {/* Fonts */}
        <link rel='preload' href='/fonts/Inter-Variable.ttf' as='font' type='font/ttf' crossOrigin='anonymous' />
        <link rel='preload' href='/fonts/FiraCode-Variable.ttf' as='font' type='font/ttf' crossOrigin='anonymous' />
      </NextHead>
      <ThemeProvider>
        <DefaultSeo />
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </>
  );
};

export default App;
