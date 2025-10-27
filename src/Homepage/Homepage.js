import styles from "./Homepage.module.css";
import React, { useState } from "react";
import CommandLineSection from "../components/CommandLineSections/FirstSection/CommandLineSection";
import CommandLineSection2 from "../components/CommandLineSections/SecondSection/CommandLineSection2";
import CommandLineSection3 from "../components/CommandLineSections/ThirdSection/CommandLineSection3";
import QuoteSection from "../components/QuoteSection/QuoteSection";
import Footer from "./Footer/Footer";

const HomePage = () => {
  const [firstAnimation1Finished, setfFirstAnimation1Finished] =
    useState(false);
  const [secondAnimation1Finished, setSecondAnimationFinished] =
    useState(false);

  const handleFirstAnimation1Finish = () => {
    setfFirstAnimation1Finished(true);
  };
  const handleSecondAnimation1Finish = () => {
    setSecondAnimationFinished(true);
  };

  return (
    <div class={styles.homepage}>
      <CommandLineSection onAnimationFinish={setfFirstAnimation1Finished} />
      <CommandLineSection2 onAnimationFinish={setSecondAnimationFinished} />
      <QuoteSection />
      <CommandLineSection3 onAnimationFinish={setSecondAnimationFinished} />
      <Footer />
    </div>
  );
};

export default HomePage;
