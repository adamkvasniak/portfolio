import React, { useState } from 'react';
import { ReactTyped } from 'react-typed';
import styles from "../CommandLineSections.module.scss";

import profilePic from './image.webp'



const CommandLineSection = ({ onAnimationFinish }) => {
  const typingSpeed = 10;

  const steps = [
    {
      content: (
        <ReactTyped
          strings={[" whoami"]}
          typeSpeed={typingSpeed}
          loop={false}
          backSpeed={20}
          cursorChar="|"
          showCursor={false}
          onComplete={() => setStep(1)}
          className={styles.command}
        />
      ),
      prefix: "root# ",
      className: styles.rootTyped,
    },
    {
      content: (
        <ReactTyped
          strings={[" My name is Adam Kvasniak and I'm software engineer. I design and build fast, secure, and elegant web systems that help brands, startups, and businesses grow online."]}
          typeSpeed={typingSpeed}
          loop={false}
          backSpeed={20}
          cursorChar="|"
          showCursor={false}
          onComplete={() => setStep(2)}
        />
      ),
    },
   
    {
      content: (
        <>
          <ReactTyped
            strings={["services"]}
            typeSpeed={typingSpeed}
            loop={false}
            backSpeed={20}
            cursorChar="|"
            showCursor={false}
            className={styles.command}
            onComplete={() => setStep(3)}
          />
          
        </>
      ),
      prefix: "root# ",
      className: styles.rootTyped,
    },
    {
      content: (
          <ReactTyped
            strings={["> Custom websites and apps development"]}
            typeSpeed={typingSpeed}
            loop={false}
            backSpeed={20}
            showCursor={false}
            className={styles.link}
            onComplete={() => setStep(4)}
          />
      ),
    },
    {
      content: (
          <ReactTyped
            strings={["> Online stores or bookings"]}
            typeSpeed={typingSpeed}
            loop={false}
            backSpeed={20}
            showCursor={false}
            className={styles.link}
            onComplete={() => setStep(5)}
          />
      ),
    },
       {
      content: (
          <ReactTyped
            strings={["> Cloud and hosting"]}
            typeSpeed={typingSpeed}
            loop={false}
            backSpeed={20}
            showCursor={false}
            className={styles.link}
            onComplete={() => setStep(6)}
          />
      ),
    },
];

  const [step, setStep] = useState(0);

  return (
    <section className={styles.mainSection}>
    <img class = {styles.profilePic} src={profilePic}></img>
    {/* <ToggleButton onClick={toggleImage} onLabel="Red" offLabel="Blue" /> */}
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
  </section>
  );
};

export default CommandLineSection;

