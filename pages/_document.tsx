import NextDocument, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

import { getCssText } from '../stitches.config';

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await NextDocument.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {/* Stitches CSS for SSR */}
          <style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </>
      ),
    };
  }

  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <script
            key='theme-script'
            dangerouslySetInnerHTML={{
              __html: `(function () {try {
                const localStorageTheme = localStorage.getItem('theme');
                const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                if (localStorageTheme) return document.body.classList.add('theme-' + localStorageTheme);
                if (prefersDarkMode) return document.body.classList.add('theme-dark');
                else return document.body.classList.add('theme-light');
                } catch (e) {}})();`,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
