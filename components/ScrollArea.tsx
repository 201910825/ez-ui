'use client'
import { cn } from '@/docs/lib/utils';
import React, { useRef, useEffect, useState } from 'react';

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  showScrollbar?: boolean; 
  barColor ?: string
}

const ScrollArea = ({ className, children,barColor = 'blue', showScrollbar = true, ...props }: ScrollAreaProps) => { 
  const [isScrollbarVisible, setIsScrollbarVisible] = useState(showScrollbar); 
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const scrollThumbRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startScrollTop, setStartScrollTop] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current && scrollTrackRef.current && scrollThumbRef.current) {
        const { clientHeight, scrollHeight } = contentRef.current;
        const trackHeight = scrollTrackRef.current.clientHeight;
        const thumbHeight = Math.max((clientHeight / scrollHeight) * trackHeight, 20);
        scrollThumbRef.current.style.height = `${thumbHeight}px`;
        setIsScrollbarVisible(showScrollbar); 
      }
    };
    
    handleResize();
    const observer = new MutationObserver(handleResize);
    if (contentRef.current) {
      observer.observe(contentRef.current, { childList: true, subtree: true });
    }
    return () => observer.disconnect();
  }, [showScrollbar, children]); // Ensure children is included
  
 

  const handleScroll = () => {
    if (contentRef.current && scrollThumbRef.current && scrollTrackRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      const trackHeight = scrollTrackRef.current.clientHeight;
      const thumbHeight = scrollThumbRef.current.clientHeight;
      const thumbTop = (scrollTop / (scrollHeight - clientHeight)) * (trackHeight - thumbHeight);
      scrollThumbRef.current.style.transform = `translateY(${thumbTop}px)`;
      setIsScrollbarVisible(showScrollbar && scrollHeight > clientHeight);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartY(e.clientY);
    if (contentRef.current) {
      setStartScrollTop(contentRef.current.scrollTop);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaY = e.clientY - startY;
      const deltaRatio = deltaY / (scrollTrackRef.current?.clientHeight || 1);
      if (contentRef.current) {
        const newScrollTop = startScrollTop + deltaRatio * contentRef.current.scrollHeight;
        contentRef.current.scrollTop = newScrollTop;
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, startY, startScrollTop]);
  
  return (
    <div className={cn(`border border-[#] relative overflow-hidden`,className)} {...props} style={{ '--bar-color': barColor } as React.CSSProperties}>
      <div
        ref={contentRef}
        className="p-4 h-full flex flex-col overflow-scroll scrollbar-hide"
        onScroll={handleScroll}
      >
        {children}
      </div>
      {isScrollbarVisible && (
        <div
          ref={scrollTrackRef}
          className="absolute right-0 top-0 h-full w-2.5 flex touch-none select-none transition-colors border-l border-l-transparent p-[1px]"
        >
          <div
            ref={scrollThumbRef}
            className={`h-full w-full bg-[var(--bar-color)] rounded-md cursor-pointer`}
            onMouseDown={handleMouseDown}
          />
        </div>
      )}
    </div>
  );
};

export default ScrollArea;
