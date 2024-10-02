'use client'
import { useEffect, useRef, useCallback } from 'react';

interface UseInfiniteScrollProps {
  callback: () => void;
  hasMore: boolean;
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

const useInfiniteScroll = ({
  callback,
  hasMore,
  threshold = 0.8,
  root = null,
  rootMargin = '0px',
}: UseInfiniteScrollProps) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useRef<HTMLDivElement | null>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore) {
        callback();
      }
    },
    [callback, hasMore]
  );

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(handleObserver, {
      root,
      rootMargin,
      threshold,
    });

    if (lastElementRef.current) observer.current.observe(lastElementRef.current);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [handleObserver, root, rootMargin, threshold]);

  return lastElementRef;
};

export default useInfiniteScroll;