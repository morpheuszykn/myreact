import React from 'react';

// Import food images
import PenangLaksaImg from '../utils/penang-laksa.jpg';
import CharKwayTeowImg from '../utils/char-kway-teow.jpg';
import HokkienMeeImg from '../utils/hokkien-mee.jpg';
import WantanMeeImg from '../utils/wantan-mee.jpg';
import LorBakImg from '../utils/lor-bak.jpg';
import NyonyaKuihImg from '../utils/nyonya-kuih.jpg';
import PenangWhiteCoffeeImg from '../utils/penang-white-coffee.jpg';

// Food data
const foods = [
  {
    name: 'Penang Laksa',
    img: PenangLaksaImg,
    description:
      'Penang Laksa is a tangy and spicy noodle soup made with mackerel fish and tamarind. It’s a must-try dish that captures the essence of Penang’s unique flavors.',
  },
  {
    name: 'Char Kway Teow',
    img: CharKwayTeowImg,
    description:
      'Char Kway Teow is a stir-fried noodle dish cooked with prawns, eggs, and bean sprouts. It is known for its smoky flavor and rich taste.',
  },
  {
    name: 'Hokkien Mee',
    img: HokkienMeeImg,
    description:
      'Hokkien Mee is a prawn noodle soup made with a flavorful broth, yellow noodles, shrimp, and pork slices. Perfect for a hearty meal.',
  },
  {
    name: 'Wantan Mee',
    img: WantanMeeImg,
    description:
      'Wantan Mee is a delicious egg noodle dish served with wontons, barbecued pork, and a savory soy-based sauce. A street food favorite!',
  },
  {
    name: 'Lor Bak/Ngo Hiang',
    img: LorBakImg,
    description:
      'Lor Bak is a traditional dish made of marinated pork wrapped in bean curd skin and deep-fried to perfection. Often served with a flavorful dipping sauce.',
  },
  {
    name: 'Nyonya Kuih',
    img: NyonyaKuihImg,
    description:
      'Nyonya Kuih are colorful bite-sized desserts made from coconut milk, glutinous rice, and pandan. A delightful treat for sweet lovers!',
  },
  {
    name: 'Penang White Coffee',
    img: PenangWhiteCoffeeImg,
    description:
      'Penang White Coffee is a creamy and aromatic coffee brewed using a unique roasting process. A perfect drink to start your day!',
  },
];

const FoodPage = () => {
  return (
    <div
      style={{
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
        backgroundImage: 'url("../utils/background.jpg")', // Add background image here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff', // 默认文本颜色设置为白色
      }}
    >
      {/* Page Title */}
      <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#000' }}>Penang Food Menu</h1>
      <p style={{ textAlign: 'center', marginBottom: '30px', color: '#000' }}>
        Penang is known as the food capital of Malaysia. Explore its rich and diverse culinary heritage with these must-try dishes.
      </p>

      {/* Food Menu List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {foods.map((food, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '20px',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '10px',
              overflow: 'hidden',
              backgroundColor: 'rgba(192, 192, 192, 0.6)', // Semi-transparent background for cards
            }}
          >
            {/* Food Image */}
            <img
              src={food.img}
              alt={food.name}
              style={{
                width: '150px',
                height: '150px',
                objectFit: 'cover',
              }}
            />

            {/* Food Details */}
            <div style={{ padding: '10px', textAlign: 'left', flex: 1 }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#000' }}>{food.name}</h3>
              <p style={{ margin: '0', lineHeight: '1.5', color: '#000' }}>{food.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodPage;
