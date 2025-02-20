import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import slider1 from '../assets/slider1.jpg';
import gn from '../assets/gn.png';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpg';
import slider4 from '../assets/slider3.jpg';

const images = [slider1, slider2, slider3, slider4];

const Rough = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const intervalRef = useRef();

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextImage, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleClick = () => {
    nextImage();
    // Reset interval after manual click
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextImage, 5000);
  };

  const handleHover = (e) => {
    gsap.to(e.target, { scale: 1.2, duration: 0.5 });
  };

  const handleHoverLeave = (e) => {
    gsap.to(e.target, { scale: 1, duration: 0.5 });
  };

  return (
    <section className="relative flex h-screen items-center justify-center">
      <div className="absolute inset-0 z-20 h-full w-full overflow-hidden">
        <AnimatePresence mode='wait'>
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ 
              duration: 1.5,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="h-full w-full object-cover cursor-pointer"
            onClick={handleClick}
            alt="Hero"
          />
        </AnimatePresence>
      </div>
      <div className="relative z-20 flex h-screen flex-col justify-end pb-4 lg:pb-15">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src={gn}
          alt="GNYAN1"
          className="filter invert lg:mx-20"
        />
        <p
          className="p-4 text-lg tracking-tighter text-white lg:mx-20 hover-effect"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverLeave}
        >
          Tamil Nadu
        </p>
      </div>
    </section>
  );
};

export default Rough;