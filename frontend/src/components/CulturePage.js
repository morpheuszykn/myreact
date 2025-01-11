import React from 'react';

// Import culture images
import Culture1Img from '../utils/culture1.jpg';
import Culture2Img from '../utils/culture2.jpg';
import Culture3Img from '../utils/culture3.jpg';
import Culture4Img from '../utils/culture4.jpg';
import Culture5Img from '../utils/culture5.jpg';
import Culture6Img from '../utils/culture6.jpg';

// Culture data
const cultures = [
  {
    name: 'Multicultural Society',
    img: Culture1Img,
    description:
      'Penang is a melting pot of diverse cultures, where Malay, Chinese, Indian, and European influences coexist harmoniously...',
  },
  {
    name: 'Street Art',
    img: Culture2Img,
    description:
      'Penang is famous for its vibrant street art scene, particularly in George Town...',
  },
  {
    name: 'Temples and Religious Sites',
    img: Culture3Img,
    description:
      'Penang is home to a wide variety of temples and religious sites, representing the many different cultures and religions that make up the city...',
  },
  {
    name: 'Festivals and Celebrations',
    img: Culture4Img,
    description:
      'Penang is renowned for its vibrant festivals that celebrate the city’s cultural and religious diversity...',
  },
  {
    name: 'Penang Heritage',
    img: Culture5Img,
    description:
      'Penang’s heritage is deeply rooted in its colonial past and its role as a trading hub in Southeast Asia...',
  },
  {
    name: 'Penang Cuisine and Food Culture',
    img: Culture6Img,
    description:
      'Penang is known as the food capital of Malaysia, where the food culture is an important aspect of daily life...',
  },
];

const CulturePage = () => {
  return (
    <div
      style={{
        padding: '20px',
        maxWidth: '900px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
        color: '#000', // Adjust text color for better visibility
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Penang Cultural Heritage</h1>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>
        Penang is rich in cultural heritage, with a blend of diverse traditions, religions, and artistic expressions that come together to form the unique identity of this island.
      </p>

      {/* Culture List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {cultures.map((culture, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '20px',
              border: '1px solid rgba(0, 0, 0, 0.2)',
              borderRadius: '10px',
              overflow: 'hidden',
              backgroundColor: '#f9f9f9', // Use light background for better readability
            }}
          >
            {/* Culture Image */}
            <img
              src={culture.img}
              alt={culture.name}
              style={{
                width: '150px',
                height: '150px',
                objectFit: 'cover',
              }}
            />

            {/* Culture Details */}
            <div style={{ padding: '10px', textAlign: 'left', flex: 1 }}>
              <h3 style={{ margin: '0 0 10px 0' }}>{culture.name}</h3>
              <p style={{ margin: '0', lineHeight: '1.5' }}>{culture.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CulturePage;
