import { AppProps } from 'next/app';
import NextHead from 'next/head';

import globalStyles from '../styles/globalStyles';

import '../styles/fonts.css';
import { ThemeProvider } from '/contexts/Theme';

const App = ({ Component, pageProps }: AppProps) => {
  globalStyles();
  return (
    <>
      <NextHead>
        <link rel='preload' href='/fonts/Inter-Variable.ttf' as='font' type='font/ttf' crossOrigin='anonymous' />
      </NextHead>
      <ThemeProvider>
        <Component {...pageProps} />;{' '}
      </ThemeProvider>
    </>
  );
};

export default App;
