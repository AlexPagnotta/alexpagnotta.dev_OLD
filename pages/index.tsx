import Head from 'next/head';
import React from 'react';
import tw from 'twin.macro';

import { styled } from '../stitches.config';

import { useTheme } from '/contexts/Theme';

const Title = styled('h1', {
  color: 'Blue',
  // Spread the base styles
  ...tw`bg-yellow max-w-[200px] pt-20 text-title-1 mb-100 `,
  // Add conditional styling in the variants object
  // https://stitches.dev/docs/variants
  variants: {
    hasBorder: { true: tw`border-pink` },
  },
});

export default function Home() {
  const { theme, toggleMode } = useTheme();

  React.useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <div>
      <Head>
        <title tw='bg-black'>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Title hasBorder>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </Title>

        <button onClick={() => toggleMode()} tw='bg-white p-32 text-body-2'>
          CLICK
        </button>

        <p tw='text-title-1 mb-40'>Test Test Text</p>
        <p tw='text-title-2 mb-40'>Test Test Text</p>
        <p tw='text-title-3 mb-40'>Test Test Text</p>
        <p tw='text-title-4 mb-40'>Test Test Text</p>
        <p tw='text-body-5 max-w-2xl mb-40'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur malesuada eros tempus volutpat.
          Phasellus ut tortor mi. Sed volutpat vehicula est. Sed egestas fringilla eros in maximus.{' '}
        </p>
        <p tw='text-body-4 max-w-2xl mb-40'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur malesuada eros tempus volutpat.
          Phasellus ut tortor mi. Sed volutpat vehicula est. Sed egestas fringilla eros in maximus.{' '}
        </p>
        <p tw='text-body-3 max-w-2xl mb-40'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur malesuada eros tempus volutpat.
          Phasellus ut tortor mi. Sed volutpat vehicula est. Sed egestas fringilla eros in maximus.{' '}
        </p>
        <p tw='text-body-2 max-w-2xl mb-40'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur malesuada eros tempus volutpat.
          Phasellus ut tortor mi. Sed volutpat vehicula est. Sed egestas fringilla eros in maximus.{' '}
        </p>
        <p tw='text-body-1  max-w-2xl mb-40'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur malesuada eros tempus volutpat.
          Phasellus ut tortor mi. Sed volutpat vehicula est. Sed egestas fringilla eros in maximus.{' '}
        </p>
      </main>
    </div>
  );
}
