const shareImageApiUrl = `${process.env['NEXT_PUBLIC_URL']}/api/share-image`;

export const generateShareImageUrl = (title?: string) => {
  const baseUrl = new URL(shareImageApiUrl);

  if (title) baseUrl.searchParams.append('title', title);

  return baseUrl.toString();
};
