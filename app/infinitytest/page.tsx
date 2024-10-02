'use client'
import useInfiniteScroll from '../../components/infinityScroll';
import React, { useState } from 'react';

const InfinityScrollComponent = () => {
  const [items, setItems] = useState<number[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (items.length >= 100) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setItems((prev) => [...prev, ...Array.from({ length: 20 }, (_, i) => prev.length + i)]);
    }, 1500);
  };

  const lastElementRef = useInfiniteScroll({
    callback: fetchMoreData,
    hasMore,
  });

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} style={{ height: '100px', border: '1px solid black' }}>
          Item {item}
        </div>
      ))}
      <div ref={lastElementRef} style={{ height: '20px' }} />
    </div>
  );
};

export default InfinityScrollComponent;