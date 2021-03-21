import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function Q6() {
  const [data, setData] = useState({ hits: [] });
 
  useEffect(async () => {
    const result = await axios(
      'https://hn.algolia.com/api/v1/search?query=redux',
    );
 
    setData(result.data);
  }, []);
 
  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
            <h2>{item.title}</h2>
        </li>
      ))}
    </ul>
  );
}
 
export default Q6;