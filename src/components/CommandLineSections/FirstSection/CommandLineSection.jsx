import React, { useState } from 'react';
import { ReactTyped } from 'react-typed';
import styles from "../CommandLineSections.module.scss";
import { FaGithub } from "react-icons/fa";
import profilePic from './image.png'



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
          strings={[" My name is Adam Kvasniak and I’m a web developer. I bring digital solutions that move your business forward."]}
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
        <ReactTyped
          strings={[" techstack"]}
          typeSpeed={typingSpeed}
          loop={false}
          backSpeed={20}
          cursorChar="|"
          showCursor={false}
          onComplete={() => setStep(3)}
          className={styles.command}
        />
      ),
      prefix: "root# ",
      className: styles.rootTyped,
    },
    {
      content: (
        <ReactTyped
          strings={[" React, Node.js, Docker, SQL, Python, Linux, Bootstrap"]}
          typeSpeed={typingSpeed}
          loop={false}
          backSpeed={20}
          cursorChar="|"
          showCursor={false}
          onComplete={() => setStep(4)}
        />
      ),
    },
    {
      content: (
        <>
          <ReactTyped
            strings={["github"]}
            typeSpeed={typingSpeed}
            loop={false}
            backSpeed={20}
            cursorChar="|"
            showCursor={false}
            className={styles.command}
            onComplete={() => setStep(5)}
          />
          <FaGithub style={{ marginLeft: '10px', fontSize: '40px' }} />
        </>
      ),
      prefix: "root# ",
      className: styles.rootTyped,
    },
    {
      content: (
        <a
          href="https://github.com/adamkvasniak"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactTyped
            strings={["www.github.com/adamkvasniak"]}
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

