// This is a js file not a ts one to be imported from external scripts

const siteConfig = {
  siteName: 'alexpagnotta.dev',
  title: 'Alex Pagnotta',
  description:
    "I'm Alex Pagnotta and this is my blog, where I share posts, snippets and generally anything I find interesting.",
  url: process.env['NEXT_PUBLIC_URL'],
  shareImage: {
    url: `${process.env['NEXT_PUBLIC_URL']}/api/share-image`,
    width: 1200,
    height: 600,
  },
  author: 'Alex Pagnotta',
  twitter: {
    username: '@alex_pagnotta_',
    url: 'https://twitter.com/alex_pagnotta_',
  },
  github: 'https://github.com/AlexPagnotta',
  linkedin: 'https://www.linkedin.com/in/alex-pagnotta/',
  rss: {
    url: '/rss.xml',
    urlExtended: `${process.env['NEXT_PUBLIC_URL']}/rss.xml`,
  },
  sitemap: {
    url: '/sitemap.xml',
    urlExtended: `${process.env['NEXT_PUBLIC_URL']}/sitemap.xml`,
  },
  resumeUrl: '/static/files/resume-alex-pagnotta.pdf',
};

export default siteConfig;
