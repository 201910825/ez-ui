'use client'
import React from 'react';
import { useInfiniteScroll } from '@easymean/ez-ui';
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
  return (
    <div >
      {items && items.map((item, index) => ( // Ensure items is an array
        <div key={item.id} style={{width : '100%',  height: '50px', border: '1px solid black' }}>
          <p>Name: {item.title}</p> {/* Assuming the API returns a title */}
          <p>ID: {item.id}</p>
        </div>
      ))}
      <div ref={lastElementRef} style={{ height: '10px' }} />
      {isLoading && <p>Loading more...</p>}
      {error && <p>error fetching</p>}
    </div>
  );
};

export default InfinityScrollComponent;