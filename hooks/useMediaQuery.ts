import React from 'react';

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = React.useState<boolean | undefined>();

  React.useEffect(() => {
    const matchMedia = window.matchMedia(query);

    const onChange = () => {
      setMatches(!!matchMedia.matches);
    };

    onChange();

    if (matchMedia.addEventListener) {
      matchMedia.addEventListener('change', onChange);
    } else {
      matchMedia.addListener(onChange); // iOS 13 and below
    }

    return () => {
      if (matchMedia.removeEventListener) {
        matchMedia.removeEventListener('change', onChange);
      } else {
        matchMedia.removeListener(onChange); // iOS 13 and below
      }
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
