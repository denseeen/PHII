// components/RssFeed.js
'use client';
import React from 'react';
import { useState, useEffect } from 'react';

const RssFeed = ({ feedItems }) => {
  const [items, setItems] = useState(feedItems);

  useEffect(() => {
    setItems(feedItems);
  }, [feedItems]);

  return (
    <div className="p-6 mt-10 bg-white-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-black">Latest News</h2>
      {items.length > 0 ? (
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold bg-white  text-black">{item.title}</h3>
              {/* <p className="text-lg">{item.description}</p> */}
              <a href={item.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Read More</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No news available at the moment.</p>
      )}
    </div>
  );
};

export default RssFeed;
