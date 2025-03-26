import React, { useState } from 'react';
import { ReactTyped } from 'react-typed';
import styles from "../Homepage.module.css"
import { FaGithub } from "react-icons/fa";

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
      <h1 className={styles.rootTyped}>
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
         <h1 className={styles.rootTyped}>
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
            onComplete={handleSixthTyped}
          />
        </h1>
      )}

      {isSixthTyped && (
        <h1 className={styles.rootTyped}>
        
        {"root# "}   
          <ReactTyped
            strings={["github"]}
            typeSpeed={typingSpeed}
            loop={false}
            backSpeed={20}
            cursorChar="|"
            showCursor={false}
            className={styles.redTyped}
            onComplete={ handleSeventhTyped}
          />
          <FaGithub style={{ marginLeft: '10px', fontSize: '40px' }} />
        </h1>
      
      )} 
      
      {isSeventhTyped && (
        <a href="https://github.com/adamkvasniak" target="_blank" rel="noopener noreferrer">
        <h1>
          <ReactTyped
            strings={["github.com/adamkvasniak"]}
            typeSpeed={typingSpeed}
            loop={false}
            backSpeed={20}
            cursorChar="|"
            showCursor={false}
            className={styles.link}
            onComplete={handleAnimationFinish}
          />
        </h1>
        </a>
      )}
    </>
  );
};

export const ToggleButton = ({ initialState = false, onLabel = "On", offLabel = "Off" }) => {
  const [isOn, setIsOn] = useState(initialState);

  const toggleButton = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <button onClick={toggleButton} style={styles.button}>
      {isOn ? onLabel : offLabel}
    </button>
  );
};

export default TypingAnimation;
