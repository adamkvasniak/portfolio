import React from 'react';
import styles from './Footer.module.css'
import profilePic from './profilePicReal.jpg'
import mainStyle from '../Homepage.module.css'

const Footer = () => {
  return (
    <footer className={`${mainStyle.mainSection} ${styles.footer}`}>
      <div className={styles.headerContainer}>
        <h1>"Let's work on your <span className={mainStyle.blueTyped}>next</span> project <span className={styles.gold}>together</span>."</h1>
      </div>
      <div className={styles.aboutAuthorContainer}>
        <img className={styles.authorPhoto} src={profilePic} alt="me"></img>
        <div className={styles.aboutAuthorText}>
          <h1>About project & author</h1>
          <p>My name is Adam Kvasniak, and this is my portfolio webpage. My passion for web development ignited in 2020, leading me to study computer science at the Faculty of Informatics in Zilina. Through my studies and personal projects, I've honed my skills in both front-end and back-end development, always striving for clean code and user-centered design. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
