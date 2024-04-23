import React, { useState } from 'react';
import styles from './BadgesDiv.module.css'; // Import CSS file for styling
import aws_badge from './aws_badge.png'
import cisco_badge from './cisco_badge.png'
import styles2 from '../Homepage.module.css'
import { ReactTyped } from 'react-typed';



const TypingAnimation2 = ({ onAnimationFinish })=> {
  const handleAnimationFinish = () => {
    onAnimationFinish();
  };

  const [isFirstTyped, setFirstTyped] = useState(false);
  const [isSecondTyped, setSecondTyped] = useState(false);
  const [isThirdTyped, setThirdTyped] = useState(false);
  const [isFourthTyped, setFourthTyped] = useState(false);
  const [isFifthTyped, setFifthTyped] = useState(false);
  const [isSixthTyped, setSixthTyped] = useState(false);
  

  const handleFirstTyped = () => {
    setFirstTyped(true);
  };

  const handleSecondTyped = () => {
    setSecondTyped(true);
  };

  const handleThirdTyped = () => {
    setThirdTyped(true);
  };

  const handleFourthTyped = () => {
    setFourthTyped(true);
  };

  const handleFifthTyped = () => {
    setFifthTyped(true);
  };
  const handleSixthTyped = () => {
    setSixthTyped(true);
  };

 


  const typingSpeed = 10;

  return (
    <div>
        <h1 className={styles2.blueTyped}>
        {"root# "}
        <ReactTyped
          strings={[" certifications"]}
          typeSpeed={typingSpeed}
          loop={false}
          backSpeed={20}
          cursorChar="|"
          showCursor={false}
          onComplete={handleFirstTyped}
          className={styles2.redTyped}
        />
      </h1>
      {isFirstTyped && (
        <div className={styles.badges}>
          <img src={aws_badge} alt="Image 1sssssss" className={styles.badgeImage} />
          <img src={cisco_badge} alt="Image 2" className={styles.badgeImage} />
      </div>
      )}

      {isFirstTyped && (
         <h1 className={styles2.blueTyped}>
          {"root# "}
          <ReactTyped
            strings={[" projects"]}
            typeSpeed={typingSpeed}
            loop={false}
            backSpeed={20}
            cursorChar="|"
            showCursor={false}
            onComplete={handleSecondTyped}
            className={styles2.redTyped}
          />
        </h1>
      )} 
       {isSecondTyped && (
        <a href="https://www.veselestolky.sk" target="_blank" rel="noopener noreferrer">
         <h1 >
          <ReactTyped
            strings={[" www.veselestolky.sk"]}
            typeSpeed={typingSpeed}
            loop={false}
            backSpeed={20}
            cursorChar="|"
            showCursor={false}
            onComplete={handleThirdTyped}
          />
        </h1>
        </a>
      )} 

      
      

      {isThirdTyped && (
         <h1 className={styles2.blueTyped}>
          {"root# "}
          <ReactTyped
            strings={[" languages"]}
            typeSpeed={typingSpeed}
            loop={false}
            backSpeed={20}
            cursorChar="|"
            showCursor={false}
            onComplete={handleFourthTyped}
            className={styles2.redTyped}
          />
        </h1>
      )}

      {isFourthTyped && (
          <h1>
          <ReactTyped
            strings={["English, Slovak"]}
            typeSpeed={typingSpeed}
            loop={false}
            backSpeed={20}
            cursorChar="|"
            showCursor={false}
            onComplete={handleFifthTyped}
          />
        </h1>
      )}

      {isFifthTyped && (
          <h1 className={styles2.blueTyped}>
          {"root# "}
          <ReactTyped
            strings={[" song"]}
            typeSpeed={typingSpeed}
            loop={false}
            backSpeed={20}
            cursorChar="|"
            showCursor={false}
            onComplete={handleSixthTyped}
            className={styles2.redTyped}
          />
        </h1>
      )}  

      {isSixthTyped && (
          <h1>
          <ReactTyped
            strings={["Free Bird - Lynyrd Skynyrd"]}
            typeSpeed={typingSpeed}
            loop={false}
            backSpeed={20}
            cursorChar="|"
            showCursor={false}
            onComplete={handleAnimationFinish}
          />
        </h1>
      )}

    </div>
    
  );
};

export default TypingAnimation2;
