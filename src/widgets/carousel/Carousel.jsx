import React, { useState, useEffect, useRef } from 'react';
import { Card } from "@material-tailwind/react";

export const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    clearInterval(slideInterval.current);
    slideInterval.current = setInterval(nextSlide, 3000);
  };

  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 3000);
    return () => clearInterval(slideInterval.current);
  }, [currentIndex, images.length]);

  return (
    <Card className="carousel-card mx-3 mt-20 mb-6 lg:mx-4 border border-blue-gray-100" style={{ overflow: 'hidden', position: 'relative', width: '100%', maxWidth: '1200px', margin: 'auto', height: 'auto' }}>
      <div className="carousel" style={{ overflow: 'hidden', width: '100%', height: 'auto' }}>
        <div className="carousel-inner" style={{ display: 'flex', transition: 'transform 0.5s ease', transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((item, index) => (
            <div className="carousel-item" key={index} style={{ minWidth: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={`${import.meta.env.VITE_APP_ASSET_PATH}${item.img}`} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
        <div className="carousel-dots" style={{ textAlign: 'center', position: 'absolute', bottom: '10px', width: '100%', zIndex: 2 }}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              style={{ cursor: 'pointer', height: '10px', width: '10px', borderRadius: '50%', display: 'inline-block', margin: '0 5px', backgroundColor: index === currentIndex ? '#333' : '#bbb' }}
            ></button>
          ))}
        </div>
      </div>
    </Card>
  );
};
