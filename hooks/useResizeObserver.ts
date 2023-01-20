import { useEffect, RefObject } from 'react';

import { useLatest } from './useLatest';

import { debounce } from '/utils/common';

const useResize = <T extends HTMLElement>(targetRef: RefObject<T>, callback: ResizeObserverCallback, wait?: number) => {
  // We use the "useLatest" hook to have a stable callback
  // and not trigger the useEffect on every re-render of the parent component
  const callbackRef = useLatest(callback);

  useEffect(() => {
    const target = targetRef.current;

    const resizeObserver = new ResizeObserver(wait === 0 ? callbackRef.current : debounce(callbackRef.current, wait));

    if (target) {
      resizeObserver.observe(target);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [callbackRef, targetRef, wait]);
};

export default useResize;
