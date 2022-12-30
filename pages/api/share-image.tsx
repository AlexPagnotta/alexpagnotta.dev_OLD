import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import { CSSProperties } from 'react';

import siteConfig from '/config/site.mjs';

export const config = {
  runtime: 'experimental-edge',
};

// N.B Variable fonts are not supported at the moment
const font = fetch(new URL('../../public/fonts/Inter-Static-Bold.ttf', import.meta.url)).then((res) =>
  res.arrayBuffer()
);

const generateShareImage = async (req: NextRequest) => {
  try {
    const fontData = await font;

    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title');

    // If a title is passed we are generating an image for a content, otherwise is the default share image
    const isContent = !!title;

    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'hsl(0, 0%, 8%)',
            color: 'hsl(0, 0%, 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: isContent ? 'flex-start' : 'center',
            fontSize: isContent ? '28px' : '32px',
            fontFamily: 'Inter',
            lineHeight: 1.8,
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: isContent ? '100%' : 0,
              left: isContent ? '100%' : 0,
              transform: 'translate(-50%, -50%)',
              width: '380px',
              height: '380px',
              borderRadius: '100%',
              background: 'linear-gradient(90deg, #FFD84D 0%, #FF9446 100%)',
              padding: '28px',
              display: 'flex',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '100%',
                background: 'hsl(0, 0%, 8%)',
              }}
            ></div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              paddingRight: isContent ? '280px' : '0px',
              paddingLeft: isContent ? '96px' : '0px',
            }}
          >
            <span>{isContent ? siteConfig.siteName : "Ehy, I'm"}</span>
            <span
              style={
                {
                  marginTop: '8px',
                  fontSize: isContent ? '72px' : '96px',
                  lineHeight: 1.2,
                  backgroundImage: 'linear-gradient(90deg, #FFD84D 0%, #FF9446 100%)',
                  backgroundClip: 'text',
                  '-webkit-background-clip': 'text',
                  color: 'transparent',
                } as CSSProperties
              }
            >
              {isContent ? title : 'Alex Pagnotta'}
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 600,
        fonts: [
          {
            name: 'Inter',
            data: fontData,
            style: 'normal',
            weight: 700,
          },
        ],
      }
    );
  } catch (e) {
    console.error(e);
    return new Response(`An error occured while generating the share image`, {
      status: 500,
    });
  }
};

export default generateShareImage;
