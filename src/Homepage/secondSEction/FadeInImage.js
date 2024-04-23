import React, { useEffect, useRef, useState } from 'react';
import './FadeInImage.css'; // Import your CSS file for styling
import image from "./profilePic2.jpeg"
import styles from "../Homepage.module.css"
const FadeInImage = () => {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const top = imageRef.current.getBoundingClientRect().top;
        const isVisible = top < window.innerHeight * 0.65; // Adjust the threshold as needed
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fade-in-image ${isVisible ? 'visible' : ''}`}>
      <img ref={imageRef} class={styles.profilePic} src={image} />
    </div>
  );
};

export default FadeInImage;
