import styles from "./Homepage.module.css"
import React, {useRef, useEffect, useState } from 'react';
import image from "./FirstSection/kvasniak1.gif"
import imageRedEyes from "./FirstSection/kvasniak_red.gif"
import image2 from "./SecondSection/profilePic2.jpeg"
import TypingAnimation from "./FirstSection/TypingAnimation";
import TypingAnimation2 from "./SecondSection/TypingAnimation2";
import TypingAnimation3 from "./ThirdSection/TypingAnimation3";
import { ToggleButton } from "./FirstSection/TypingAnimation";
import Quote from "./ThirdSection/Quote";
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
  const [currentImage, setCurrentImage] = useState(image);
  const toggleImage = () => {
    setCurrentImage(prevImage => (prevImage === image ? imageRedEyes : image));
  };
  const ToggleButton = ({ onClick, onLabel = "On", offLabel = "Off", isOn }) => (
    <button onClick={onClick}>
      {isOn ? onLabel : offLabel}
    </button>
  );
    
  return (
    <div class={styles.homepage}>
{/* prva sekcia */}
      <div className={styles.mainSection}>
        <img class = {`${styles.profilePic} ${styles.firstProfilePic}`} src={currentImage}></img>
        {/* <ToggleButton onClick={toggleImage} onLabel="Red" offLabel="Blue" /> */}
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
