'use client';

import React, { useEffect, useState } from 'react';

export default function Page() {
  // State for storing the fetched RSS feed items
  const [feedItems, setFeedItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Technology');

  // Fetch the RSS feed from the server directly
  useEffect(() => {
    const fetchFeed = async (category) => {
      const feedUrls = {
        'Technology': 'https://data.gmanetwork.com/gno/rss/scitech/technology/feed.xml',
        'Sports': 'https://data.gmanetwork.com/gno/rss/sports/basketball/feed.xml',
        'Lifestyle': 'https://data.gmanetwork.com/gno/rss/lifestyle/feed.xml',
        'Weather': 'https://data.gmanetwork.com/gno/rss/scitech/weather/feed.xml'
      };

      const res = await fetch(feedUrls[category]);
      const xml = await res.text();

      // Parse the XML to extract RSS feed items
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xml, 'application/xml');
      const items = Array.from(xmlDoc.getElementsByTagName('item')).map((item) => {
        const description = item.getElementsByTagName('description')[0]?.textContent || '';
        const imgMatch = description.match(/<img[^>]+src="([^"]+)"/);
        const imageUrl = imgMatch ? imgMatch[1] : '';

        return {
          title: item.getElementsByTagName('title')[0]?.textContent,
          description: description.replace(/<br\/>/g, '').replace(/<img[^>]+>/, '').trim(), // Remove <br/> and image tag from description
          link: item.getElementsByTagName('link')[0]?.textContent,
          image: imageUrl,
        };
      });

      setFeedItems(items);
    };

    fetchFeed(selectedCategory);  // Fetch the feed based on the selected category
  }, [selectedCategory]); // The effect runs whenever selectedCategory changes

  return (
    <div className="bg-white text-black p-6 flex flex-col items-center">
      {/* Category Buttons */}
      <div className="mb-4 flex flex-wrap w-full max-w-6xl gap-2 justify-center md:justify-start">
        {['Technology', 'Sports', 'Lifestyle', 'Weather'].map((category) => (
          <button 
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded text-sm md:text-base 
                        ${selectedCategory === category ? 'bg-blue-500 text-white font-bold' : 'bg-gray-300 hover:bg-gray-400'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Feed Items */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {feedItems.map((item, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-lg bg-white flex flex-col items-center">
            
            {/* Image Handling */}
            {item.image && (
              <img src={item.image} alt={item.title} 
                className="w-full h-40 sm:h-48 md:h-56 object-cover rounded mb-2" 
              />
            )}
            
            {/* Title */}
            <h2 className="text-lg md:text-xl font-bold text-black mb-2 text-center">
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600">
                {item.title}
              </a>
            </h2>
            
            {/* Description */}
            <p className="text-sm md:text-base text-gray-700 mb-2 text-center line-clamp-3">
              {item.description}
            </p>

            {/* Read More Button */}
            <a href={item.link} target="_blank" rel="noopener noreferrer" 
              className="text-blue-500 font-bold hover:text-blue-700">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
