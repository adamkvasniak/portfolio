import React, { useState } from 'react';
import { ReactTyped } from 'react-typed';
import styles from "./Homepage.module.css"

const TypingAnimation = ({ onAnimationFinish }) => {

  const handleAnimationFinish = () => {
    onAnimationFinish();
  };
// konzolovy 'dialog'
  const [isFirstTyped, setFirstTyped] = useState(false);
  const [isSecondTyped, setSecondTyped] = useState(false);
  const [isThirdTyped, setThirdTyped] = useState(false);
  const [isFourthTyped, setFourthTyped] = useState(false);
  const [isFifthTyped, setFifthTyped] = useState(false);
  const [isSixthTyped, setSixthTyped] = useState(false);
  const [isSeventhTyped, setSeventhTyped] = useState(false);

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

  const handleSeventhTyped = () => {
    setSeventhTyped(true);
  };


  const typingSpeed = 10;

  return (
    <>
      <h1 className={styles.blueTyped}>
        {"root# "}
        <ReactTyped
          strings={[" whoami"]}
          typeSpeed={typingSpeed}
          loop={false}
          backSpeed={20}
          cursorChar="|"
          showCursor={false}
          onComplete={handleFirstTyped}
          className={styles.redTyped}
        />
      </h1>

      {isFirstTyped && (
        <h1>
          <ReactTyped
            strings={[" My name is Adam Kvasniak and I'm web developer"]}
            typeSpeed={typingSpeed}
            loop={false}
            backSpeed={20}
            cursorChar="|"
            showCursor={false}
            onComplete={handleSecondTyped}
          />
        </h1>
      )}

      {isSecondTyped && (
         <h1 className={styles.blueTyped}>
          {"root# "}
          <ReactTyped
            strings={[" techstack"]}
            typeSpeed={typingSpeed}
            loop={false}
            backSpeed={20}
            cursorChar="|"
            showCursor={false}
            onComplete={handleThirdTyped}
            className={styles.redTyped}
          />
        </h1>
      )}

      {isThirdTyped && (
        <h1>
          <ReactTyped
            strings={[" React, Node.js, Docker, SQL, Python, Linux, Bootstrap"]}
            typeSpeed={typingSpeed}
            loop={false}
            backSpeed={20}
            cursorChar="|"
            showCursor={false}
            onComplete={handleFourthTyped}
          />
        </h1>
      )}

      {isFourthTyped && (
         <h1 className={styles.blueTyped}>
          {"root# "}
          <ReactTyped
            strings={[" experience"]}
            typeSpeed={typingSpeed}
            loop={false}
            backSpeed={20}
            cursorChar="|"
            showCursor={false}
            onComplete={handleFifthTyped}
            className={styles.redTyped}
          />
        </h1>
      )}

      {isFifthTyped && (
        <h1>
          <ReactTyped
            strings={[" 'Programming lector' : '2 years', 'Web developing':'1 year'"]}
            typeSpeed={typingSpeed}
            loop={false}
            backSpeed={20}
            cursorChar="|"
            showCursor={false}
            onComplete={handleSixthTyped}
          />
        </h1>
      )}

      {isSixthTyped && (
        <h1 className={styles.blueTyped}>
        {"root# "}
          <ReactTyped
            strings={[" education"]}
            typeSpeed={typingSpeed}
            loop={false}
            backSpeed={20}
            cursorChar="|"
            showCursor={false}
            className={styles.redTyped}
            onComplete={handleSeventhTyped}
          />
        </h1>
      )}
      {isSeventhTyped && (
        <h1>
          <ReactTyped
            strings={[" Ongoing bachelor's study of Computer and Internet Networks, Slovakia, Zilina"]}
            typeSpeed={typingSpeed}
            loop={false}
            backSpeed={20}
            cursorChar="|"
            showCursor={false}
            onComplete={handleAnimationFinish}
          />
        </h1>
      )}
    </>
  );
};

export default TypingAnimation;
