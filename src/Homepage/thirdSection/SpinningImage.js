import React from 'react';
import { Parallax } from 'react-parallax';
import styles from './TypingAnimation3.module.css'; 
import imageSaw from './sawBlade.png'
const SpinningImage = () => {
    return (
      <div className={styles.parallaxContainer}>
        <Parallax strength={300}>
          <div className={styles.parallaxContent}>
            <img
              src={imageSaw}
              alt="Spinning Image"
              className={styles.spinningImage}
            />
          </div>
        </Parallax>
      </div>
    );
  };
  
  export default SpinningImage;
  