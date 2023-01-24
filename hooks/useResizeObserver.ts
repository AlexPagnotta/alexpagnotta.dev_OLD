import React, { RefObject } from 'react';

import useLatest from './useLatest';

import { debounce } from '/utils/common';

const useResize = <T extends HTMLElement>(
  targetRef: RefObject<T>,
  callback: ResizeObserverCallback,
  deps: unknown[] = [],
  wait?: number
) => {
  // We use the "useLatest" hook to have a stable callback
  // and not trigger the useEffect on every re-render of the parent component
  const callbackRef = useLatest(callback);

  React.useEffect(() => {
    const target = targetRef.current;

    // Debounce the callback if a wait value is passed
    const debouncedCallback = wait ? debounce(callbackRef.current, wait) : undefined;

    const resizeObserver = new ResizeObserver(debouncedCallback || callbackRef.current);

    if (target) {
      resizeObserver.observe(target);
    }

    return () => {
      debouncedCallback?.cancel(); // Cancel the debounced callback cause it could be stale
      resizeObserver.disconnect();
    };
    // Seems the only way to spread the dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callbackRef, targetRef, wait, ...deps]);
};

export default useResize;
