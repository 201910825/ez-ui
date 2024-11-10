export interface UseInfiniteScrollProps {
    fetchItems: (page: number) => Promise<{
        results: any[];
        total_pages: number;
    }>;
    threshold?: number;
    root?: Element | null;
    rootMargin?: string;
    initialPage?: number;
    cache?: boolean;
}
declare const useInfiniteScroll: ({ fetchItems, threshold, root, rootMargin, initialPage, cache, }: UseInfiniteScrollProps) => {
    lastElementRef: import("react").MutableRefObject<HTMLDivElement | null>;
    items: any[];
    isLoading: boolean;
    error: boolean;
};
export default useInfiniteScroll;
