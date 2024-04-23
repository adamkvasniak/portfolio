import styles from "./Homepage.module.css"
import React, {useRef, useEffect, useState } from 'react';
import image from "./kvasniak1.gif"
import image2 from "./secondSEction/profilePic2.jpeg"
import TypingAnimation from "./TypingAnimation";
import TypingAnimation2 from "./secondSEction/TypingAnimation2";
import TypingAnimation3 from "./thirdSection/TypingAnimation3";

import Quote from "./thirdSection/Quote";
import Footer from "./Footer/Footer";
  
const HomePage = () => {
  const [firstAnimation1Finished, setfFirstAnimation1Finished] = useState(false);
  const [secondAnimation1Finished, setSecondAnimationFinished] = useState(false);

  const handleFirstAnimation1Finish = () => {
    setfFirstAnimation1Finished(true);
  };
  const handleSecondAnimation1Finish = () => {
    setSecondAnimationFinished(true);
  };
    
  return (
    <div class={styles.homepage}>
{/* prva sekcia */}
      <div className={styles.mainSection}>
        <img class = {`${styles.profilePic} ${styles.firstProfilePic}`} src={image}></img>
        <div class = {styles.typpingAnimationContainer}>
           <TypingAnimation onAnimationFinish={handleFirstAnimation1Finish} />
        </div>
      </div>
{/* druha sekcia */}
      <div className={`${styles.mainSection} ${styles.secondSection}`}>
        <div class = {styles.typpingAnimationContainer}>
          {firstAnimation1Finished && (<TypingAnimation2 onAnimationFinish={handleSecondAnimation1Finish}/>)}
        </div>
        <img class = {`${styles.profilePic} ${styles.firstProfilePic}`} src={image2}></img>
      </div>
{/* tretia sekcia */}
      <div className={`${styles.mainSection} ${styles.thirdSection}`}>
        <Quote />
        <div class = {styles.typpingAnimationContainer}>
          {secondAnimation1Finished && (<TypingAnimation3 onAnimationFinish={handleSecondAnimation1Finish}/>)}
        </div>
        
      </div>
        
      <Footer />
    

     
    </div>
  );
};

export default HomePage;
