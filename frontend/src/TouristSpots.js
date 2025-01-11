// pages/TouristSpots.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TouristSpots() {
  // 使用 useState 初始化数组
  const [sports, setSports] = useState([]);

  // 使用 useEffect 获取数据
  useEffect(() => {
    axios.get('http://localhost:3001/sport')
      .then(response => {
        // 设置获取的数据到状态
        setSports(response.data);
      })
      .catch(error => {
        console.error('Error fetching sports data:', error);
      });
  }, []); // 空数组表示仅在组件挂载时运行一次

  return (
    <div>
      <h2>旅游景点</h2>
      <ul>
        {sports.map(spot => (
          <li key={spot.id}>
            <h3>{spot.name}</h3>
            <p>{spot.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TouristSpots;
