import React, { useState } from 'react';
import { FaGithub,FaEnvelope } from "react-icons/fa";
import styles from '../CommandLineSections.module.scss';
import { ReactTyped } from 'react-typed';



const CommandLineSection3 = ({ onAnimationFinish }) => {
  const [step, setStep] = useState(0);
  const typingSpeed = 10;

  const steps = [
     
    {
  content: (
    <>
      <ReactTyped
        strings={["email"]}
        typeSpeed={typingSpeed}
        loop={false}
        backSpeed={20}
        cursorChar="|"
        showCursor={false}
        className={styles.command}
        onComplete={() => setStep(6)}
      />
      <FaEnvelope style={{ marginLeft: '10px', fontSize: '40px' }} />
    </>
  ),
  prefix: "root# ",
  className: styles.rootTyped,
},
{
  content: (
    <a
      href="a.kvasniak@protonmail.ch"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ReactTyped
        strings={["a.kvasniak@protonmail.ch"]}
        typeSpeed={typingSpeed}
        loop={false}
        backSpeed={20}
        cursorChar="|"
        showCursor={false}
        className={styles.link}
        onComplete={onAnimationFinish}
      />
    </a>
  ),
},
  ];

  return (
    <section className={`${styles.mainSection} ${styles.thirdSection}`}>

    <div className = {` ${styles.typpingAnimationContainer} ${styles.typpingAnimationContainer3}`}>
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

export default CommandLineSection3;