'use client'
import React, { useState, useEffect } from 'react'
import style from '@/styles/Hero.module.css'
import Image from 'next/image'

const Slider = () => {
  const images = [
    'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057474498-earphone.jpg',
    'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692941008275-headphone3.jpg',
    'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694100438525-51Prg4Smx-L._SL1500_.jpg',
    'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692257315660-logitech.jpg',
    'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692940742197-speaker1.jpg',
    'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691074519203-galaxy S22 5G.jpg'
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:w-1/2 w-full h-full relative overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            className={`${style.slide} ${index === currentSlide ? style.active : ''}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Slider;