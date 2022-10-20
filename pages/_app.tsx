import { AppProps } from 'next/app';
import NextHead from 'next/head';

import globalStyles from '../styles/globalStyles';

import '../styles/fonts.css';

const App = ({ Component, pageProps }: AppProps) => {
  globalStyles();
  return (
    <>
      <NextHead>
        <link rel='preload' href='/fonts/Inter-Variable.ttf' as='font' type='font/ttf' crossOrigin='anonymous' />
      </NextHead>
      <Component {...pageProps} />;
    </>
  );
};

export default App;
