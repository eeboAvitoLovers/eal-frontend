import { useEffect, useRef } from "react";

const useInfiniteScroll = (loadMore: () => void) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore();
      },
      { threshold: 0.1 }
    );
    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [elementRef.current, loadMore]);

  return elementRef;
};

export default useInfiniteScroll;
