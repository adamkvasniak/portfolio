import React from 'react';
import styles from './TypingAnimation3.module.css'

const Quote = () => {
  return (
    <div className={styles.quoteContainer}>
      <h1 className={styles.quoteText}>"There is a difference between <span class={styles.red}>knowing</span> the path and <span class={styles.blue}>walking</span>  the path." </h1>
      <p className={styles.author}>Morpheus</p>
    </div>
  );
}

export default Quote;