'use client'

import { useEffect, useRef, useCallback, useState } from 'react';

export interface UseInfiniteScrollProps {
  fetchItems: (page: number) => Promise<{ results: any[], total_pages: number }>;
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  initialPage?: number;
  cache?: boolean; 
}

const useInfiniteScroll = ({
  fetchItems,
  threshold = 0.8,
  root = null,
  rootMargin = '0px',
  initialPage = 0,
  cache = false, // 기본값은 false로 설정
}: UseInfiniteScrollProps) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useRef<HTMLDivElement | null>(null);
  const [items, setItems] = useState<any[]>(() => {
    if (cache) {
      const savedItems = localStorage.getItem('infiniteScrollItems');
      return savedItems ? JSON.parse(savedItems) : [];
    }
    return [];
  });
  const [page, setPage] = useState(() => {
    if (cache) {
      const savedPage = localStorage.getItem('infiniteScrollPage');
      return savedPage ? JSON.parse(savedPage) : initialPage;
    }
    return initialPage;
  });
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  const cacheRef = useRef<{ [key: number]: any[] }>({});

  const loadMoreItems = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    try {
      if (cacheRef.current[page]) {
        setItems((prev) => [...prev, ...cacheRef.current[page]]);
        setPage((prevPage) => prevPage + 1);
        setIsLoading(false);
        return;
      }

      const newResponse = await fetchItems(page);
      setItems((prev) => [...prev, ...newResponse.results]);
      setPage((prevPage) => prevPage + 1);
      setTotalPages(newResponse.total_pages);

      cacheRef.current[page] = newResponse.results;

      if (page + 1 >= newResponse.total_pages) {
        setHasMore(false);
      }
    } finally {
      setIsLoading(false);
    }
  }, [page, hasMore, isLoading, fetchItems]);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore && !isLoading) {
        loadMoreItems();
      }
    },
    [hasMore, isLoading, loadMoreItems]
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

  useEffect(() => {
    if (cache) {
      localStorage.setItem('infiniteScrollItems', JSON.stringify(items));
      localStorage.setItem('infiniteScrollPage', JSON.stringify(page));
    }
  }, [items, page, cache]);

  return { lastElementRef, items, isLoading };
};

export default useInfiniteScroll;