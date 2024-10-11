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
  cache = false,
}: UseInfiniteScrollProps) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useRef<HTMLDivElement | null>(null);
  const [items, setItems] = useState<any[]>(() => {
    if (cache && typeof window !== 'undefined') {
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
  const [error, setError] = useState(false); // New state to track errors
  const cacheRef = useRef<{ [key: number]: any[] }>({});

  const loadMoreItems = useCallback(async () => {
    if (isLoading || !hasMore || error) return; 
    setIsLoading(true);
    try {
      if (cacheRef.current[page] && cacheRef.current[page] !== undefined ) {
        setItems((prev) => [...prev, ...cacheRef.current[page]]);
        setPage((prevPage) => prevPage + 1);
        setIsLoading(false);
        return;
      }

      const newResponse = await fetchItems(page);
      if (newResponse.results.length!==0)
      {
        setItems((prev) => [...prev, ...newResponse.results]);
        setPage((prevPage) => prevPage + 1);
        setTotalPages(newResponse.total_pages);
        cacheRef.current[page] = newResponse.results;
      }
      else throw error

      if (page + 1 > newResponse.total_pages) {
        setHasMore(false);
      }
    } catch (error) {
      setError(true); // Set error state to true
      setHasMore(false); // Stop further attempts
      return error
    } finally {
      setIsLoading(false);
    }
  }, [page, hasMore, isLoading, fetchItems, error]);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore && !isLoading && !error) { // Add error check
        loadMoreItems();
      }
    },
    [hasMore, isLoading, loadMoreItems, error] // Add error to dependencies
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

  return { lastElementRef, items, isLoading, error };
};

export default useInfiniteScroll;