import React from 'react';

// Import attraction images
import Attraction1Img from '../utils/attraction1.jpg'; // 确保路径正确
import Attraction2Img from '../utils/attraction2.jpg';
import Attraction3Img from '../utils/attraction3.jpg';
import Attraction4Img from '../utils/attraction4.jpg';
import Attraction5Img from '../utils/attraction5.jpg';
import Attraction6Img from '../utils/attraction6.jpg';

// Attraction data
const attractions = [
  {
    name: 'Penang Hill',
    img: Attraction1Img,
    description:
      'Penang Hill offers breathtaking panoramic views of the island and beyond. Visitors can enjoy the cooler climate at the top, explore the historic colonial-style buildings, and visit attractions such as The Habitat, which features a canopy walk and a diverse collection of flora and fauna. The funicular train ride to the summit is an unforgettable experience.',
  },
  {
    name: 'Kek Lok Si Temple',
    img: Attraction2Img,
    description:
      'As one of the largest Buddhist temples in Southeast Asia, Kek Lok Si Temple is a must-visit for its stunning architecture, serene atmosphere, and towering statue of the Goddess of Mercy (Guan Yin). The temple complex is adorned with intricate carvings, colorful murals, and a beautiful pond filled with turtles, symbolizing longevity.',
  },
  {
    name: 'Penang National Park',
    img: Attraction3Img,
    description:
      'The Penang National Park is a haven for nature lovers, offering pristine beaches, lush forests, and diverse wildlife. Visitors can embark on hiking trails to destinations like Monkey Beach or the iconic lighthouse at Cape Rachado. The park also features a canopy walkway for a unique perspective of the forest.',
  },
  {
    name: 'George Town Heritage Area',
    img: Attraction4Img,
    description:
      'George Town, a UNESCO World Heritage Site, is known for its vibrant blend of old-world charm and modern art. Explore its narrow streets to discover colonial-era buildings, traditional Chinese shophouses, and colorful street art. Landmarks like Cheong Fatt Tze Mansion and Fort Cornwallis showcase Penang’s rich history.',
  },
  {
    name: 'Penang Peranakan Mansion',
    img: Attraction5Img,
    description:
      'The Penang Peranakan Mansion offers a glimpse into the opulent lifestyle of the Straits Chinese community. This beautifully restored heritage house features ornate interiors, antique furniture, and an impressive collection of artifacts that reflect the unique blend of Chinese and Malay cultures.',
  },
  {
    name: 'Entopia by Penang Butterfly Farm',
    img: Attraction6Img,
    description:
      'Entopia is a paradise for butterfly enthusiasts and nature lovers. This indoor garden is home to thousands of free-flying butterflies and a variety of other insects. Interactive exhibits and educational programs make it an ideal destination for families and those curious about the natural world.',
  },
];

const AttractionsPage = () => {
  return (
    <div
      style={{
        padding: '20px',
        maxWidth: '900px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
        color: '#fff', // 默认文本颜色设置为白色
      }}
    >
      {/* Page Title */}
      <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#000' }}>Penang Tourist Attractions</h1>
      <p style={{ textAlign: 'center', marginBottom: '30px', color: '#000' }}>
        Discover the best that Penang has to offer, from stunning natural landscapes to rich cultural and historical landmarks.
      </p>

      {/* Attraction Menu List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {attractions.map((attraction, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '20px',
              border: '1px solid rgba(2, 2, 2, 0.3)',
              borderRadius: '10px',
              overflow: 'hidden',
              backgroundColor: 'rgba(182, 182, 182, 0.6)', // Semi-transparent background for cards
            }}
          >
            {/* Attraction Image */}
            <img
              src={attraction.img}
              alt={attraction.name}
              style={{
                width: '150px',
                height: '150px',
                objectFit: 'cover',
              }}
            />

            {/* Attraction Details */}
            <div style={{ padding: '10px', textAlign: 'left', flex: 1 }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#000' }}>{attraction.name}</h3>
              <p style={{ margin: '0', lineHeight: '1.5', color: '#000' }}>{attraction.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttractionsPage;
