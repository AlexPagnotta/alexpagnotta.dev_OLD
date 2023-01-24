import { useIsomorphicLayoutEffect } from 'framer-motion';
import React from 'react';

/*
  Based on the "LatestRefPattern", this hook returns an always up to date ref based on the passed state value or callback.
  This is useful to access the latest updated value in a useEffect without triggering the effect itself.
  See: https://epicreact.dev/the-latest-ref-pattern-in-react/
*/
const useLatest = <T>(value: T) => {
  const refValue = React.useRef(value);

  useIsomorphicLayoutEffect(() => {
    refValue.current = value;
  }, [value]);

  return refValue;
};

export default useLatest;
