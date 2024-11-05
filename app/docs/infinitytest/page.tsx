'use client'
import React, { useEffect } from 'react';
import { ScrollArea, useInfiniteScroll } from '@easymean/ez-ui';
// Mock fetch function

const data = async (page) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
    
  } catch (error) {
    console.error('Failed to fetch items:', error);
    return []
  }
};
const InfinityScrollComponent = () => {
  const { lastElementRef, items, isLoading, error } = useInfiniteScroll({
    fetchItems: async (page) => {
      const result = await data(page); 
      return {
        results: result,
        total_pages: 10
      };
    },
    initialPage: 1,
    cache: false
  });
  useEffect(() => {
    // Assuming ScrollArea has a method to update the scrollbar
    // You might need to call a method or trigger a re-render
  }, [items]);
  return (
    <ScrollArea className='w-[500px] h-[350px] ' showScrollbar={true} barColor='blue'>
      {items && items.map((item, index) => ( // Ensure items is an array
        <div key={item.id} style={{width : '100%',  height: '50px', border: '1px solid black' }}>
          <p>Name: {item.title}</p> {/* Assuming the API returns a title */}
          <p>ID: {item.id}</p>
        </div>
      ))}
      <div ref={lastElementRef} style={{ height: '10px' }} />
      {isLoading && <p>Loading more...</p>}
      {error && <p>error fetching</p>}
    </ScrollArea>
  );
};

export default InfinityScrollComponent;