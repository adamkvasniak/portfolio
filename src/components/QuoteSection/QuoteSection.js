import React from 'react';
import styles from './QuoteSection.module.scss'
import profilePic from './image.png'
const Quote = () => {
  return (
    <div className={styles.quoteContainer}>
      <div className={styles.text}>
        <h1 className={styles.quoteText}>"There is a difference between <span class={styles.red}>knowing</span> the path and <span class={styles.blue}>walking</span>  the path." </h1>
        <p className={styles.author}>Morpheus</p>   
      </div>

      <div>
        <img class = {styles.profilePic} src={profilePic}></img>
      </div>
    </div>
  );
}

export default Quote;