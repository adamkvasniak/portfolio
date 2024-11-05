import React, { useState } from 'react';
import styles2 from '../Homepage.module.css'
import styles from './TypingAnimation3.module.css'
import { ReactTyped } from 'react-typed';
import { useParallax } from 'react-scroll-parallax';
import SpinningImage from './SpinningImage'; 
import downloadIcon from './PDF.png'


const SecondSection = ({ onAnimationFinish })=> {
  const handleAnimationFinish = () => {
    onAnimationFinish();
  };

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
// spinner
const parallax = useParallax<HTMLDivElement>({
    rotate: [0, 360],
  });

  return (
    <div>
        <h1 className={styles2.rootTyped}>
        {"root# "}
        <ReactTyped
          strings={[" hobbies"]}
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
        <div className={styles2.badges}>
          <SpinningImage />
         
      </div>
      )}

      {isFirstTyped && (
         <h1 className={styles2.rootTyped}>
          {"root# "}
          <ReactTyped
            strings={[" children"]}
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
          <h1>
          <ReactTyped
            strings={[" {}"]}
            typeSpeed={typingSpeed}
            loop={false}
            backSpeed={20}
            cursorChar="|"
            showCursor={false}
            onComplete={handleThirdTyped}
      
          />
        </h1>
      )}

      {isThirdTyped && (
         <h1 className={styles2.rootTyped}>
          {"root# "}
          <ReactTyped
            strings={[" funfact"]}
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
            strings={["In table football, I can score only with the goalkeeper"]}
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
          <h1 className={styles2.rootTyped}>
          {"root# "}
          <ReactTyped
            strings={[" resume"]}
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
        <div className={styles.resumeContainer}>
          <a href={"./CV.pdf"}  download="CV_Adam_Kvasniak_eng.pdf">
            <img className={styles.downloadIcon} src={downloadIcon} alt="Download PDF" />
          </a>
          <h1> 
          <ReactTyped
            strings={["English"]}
            typeSpeed={typingSpeed}
            loop={false}
            backSpeed={20}
            cursorChar="|"
            showCursor={false}
            onComplete={handleAnimationFinish}
          />
          
        </h1>
      </div>
      )}

    {isSixthTyped && (
        <div className={styles.resumeContainer}>
          <a href={"./CV_sk.pdf"}  download="CV_Adam_Kvasniak.pdf">
            <img className={styles.downloadIcon} src={downloadIcon} alt="Download PDF" />
          </a>
          <h1> 
          <ReactTyped
            strings={["Slovak"]}
            typeSpeed={typingSpeed}
            loop={false}
            backSpeed={20}
            cursorChar="|"
            showCursor={true}
            onComplete={handleAnimationFinish}
          />
          
        </h1>
      </div>
      )}

    </div>
    
  );
};

export default SecondSection;
