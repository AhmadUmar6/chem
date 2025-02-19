"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Firm.module.css';
import OurJourney from '../../components/OurJourney';

const IMAGES = [
  {
    src: "/cmt22.png",
    alt: "CMT Image"
  },
  {
    src: "/law.png",
    alt: "Law Image"
  }
];

export default function Firm() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 6000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.firmPage}>
      <div className={styles.heroSection}>
        {IMAGES.map((image, index) => (
          <div
            key={image.src}
            className={styles.imageContainer}
            style={{
              opacity: currentImageIndex === index ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0} // Load the first image with priority
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, 100vw"
              quality={75} // Reduced quality for faster loading
              loading={index === 0 ? 'eager' : 'lazy'} // Load the first image eagerly, others lazily
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        ))}
      </div>

      <div id="ourJourney" className={styles.section}>
        <OurJourney scrollToSection={scrollToSection} />
      </div>
    </div>
  );
}