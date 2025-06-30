import React, { useState } from 'react';

import aws_badge from './aws_badge.png';
import cisco_badge from './cisco_badge.png';
import styles from '../CommandLineSections.module.scss';
import { ReactTyped } from 'react-typed';
import profilePic from './image-1.webp'
import CommandLineSection from '../FirstSection/CommandLineSection';

const CommandLineSection2 = ({ onAnimationFinish }) => {
  const [step, setStep] = useState(0);
  const typingSpeed = 10;

  const steps = [
    {
      prefix: "root# ",
      content: (
        <ReactTyped
          strings={[" certifications"]}
          typeSpeed={typingSpeed}
          loop={false}
          backSpeed={20}
          cursorChar="|"
          showCursor={false}
          onComplete={() => setStep(2)}
          className={styles.command}
        />
      ),
      className: styles.rootTyped,
    },
    {
      content: (
        <div className={styles.badges}>
          <img src={aws_badge} alt="AWS Badge" className={styles.badgeImage} />
          <img src={cisco_badge} alt="Cisco Badge" className={styles.badgeImage} />
        </div>
        
      ),
      
    },
    {
      prefix: "root# ",
      content: (
        <ReactTyped
          strings={[" projects"]}
          typeSpeed={typingSpeed}
          loop={false}
          backSpeed={20}
          cursorChar="|"
          showCursor={false}
          onComplete={() => setStep(3)}
          className={styles.command}
        />
      ),
      className: styles.rootTyped,
    },
    {
      content: (
        <a href="https://www.veselestolky.sk" target="_blank" rel="noopener noreferrer">
          <ReactTyped
            strings={[" www.veselestolky.sk"]}
            typeSpeed={typingSpeed}
            loop={false}
            backSpeed={20}
            cursorChar="|"
            showCursor={false}
            className={styles.link}
            onComplete={() => setStep(4)}
          />
        </a>
      ),
    },
    {
      content: (
        <a href="https://www.bhaktabuilders.com" target="_blank" rel="noopener noreferrer">
          <ReactTyped
            strings={["www.bhaktabuilders.com"]}
            typeSpeed={typingSpeed}
            loop={false}
            backSpeed={20}
            cursorChar="|"
            showCursor={false}
            className={styles.link}
            onComplete={() => setStep(5)}
          />
        </a>
      ),
    },
    {
      prefix: "root# ",
      content: (
        <ReactTyped
          strings={[" languages"]}
          typeSpeed={typingSpeed}
          loop={false}
          backSpeed={20}
          cursorChar="|"
          showCursor={false}
          onComplete={() => setStep(6)}
          className={styles.command}
        />
      ),
      className: styles.rootTyped,
    },
    {
      content: (
        <ReactTyped
          strings={["English, Slovak"]}
          typeSpeed={typingSpeed}
          loop={false}
          backSpeed={20}
          cursorChar="|"
          showCursor={false}
          onComplete={onAnimationFinish}
        />
      ),
    },

  ];

  return (
    <section className={`${styles.mainSection} ${styles.secondSection}`}>

    <div class = {styles.typpingAnimationContainer}>
      {steps.map((item, index) =>
        index <= step ? (
          <h1 key={index} className={item.className || ""}>
            {item.prefix || ""}
            {item.content}
          </h1>
        ) : null
      )}
    </div>
    <img class = {styles.profilePic} src={profilePic}></img>
  </section>
  );
};

export default CommandLineSection2;