// This is a js file not a ts one to be imported from external scripts

const siteConfig = {
  siteName: 'alexpagnotta.dev',
  title: 'TODO: Placeholder',
  description: 'TODO: Placeholder',
  url: process.env['NEXT_PUBLIC_URL'],
  shareImage: {
    url: `${process.env['NEXT_PUBLIC_URL']}/api/share-image`,
    width: 1200,
    height: 600,
  },
  twitterUsername: 'TODO: @Placeholder',
  author: 'Alex Pagnotta',
};

export default siteConfig;
