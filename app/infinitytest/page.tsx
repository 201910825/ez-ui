'use client'
import useInfiniteScroll from '../../components/infinityScroll';
import React from 'react';
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
  }
};

const InfinityScrollComponent = () => {
  const { lastElementRef, items, isLoading } = useInfiniteScroll({
    fetchItems: async (page) => {
      const result = await data(page); 
      console.log(result)
      return {
        results: result,
        total_pages: 10
      };
    },
    initialPage: 1,
    cache: false
  });

  return (
    <div>
      {items && items.map((item) => ( // Ensure items is an array
        <div style={{ height: '50px', border: '1px solid black' }}>
          <p>Name: {item.title}</p> {/* Assuming the API returns a title */}
          <p>ID: {item.id}</p>
        </div>
      ))}
      <div ref={lastElementRef} style={{ height: '10px' }} />
      {isLoading && <p>Loading more...</p>}
    </div>
  );
};

export default InfinityScrollComponent;