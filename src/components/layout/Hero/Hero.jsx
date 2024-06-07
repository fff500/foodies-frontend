import React, { useCallback } from "react";

import styles from "./Hero.module.css";

const Hero = () => {
  const handleCTA = useCallback(() => {
    console.log("TODO: add here logic for CTA");
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContentContainer}>
        <h1 className={styles.heroTitle} id="hero-title">
          Improve Your Culinary Talents
        </h1>
        <p className={styles.heroSubtitle}>
          Amazing recipes for beginners in the world of cooking, enveloping you
          in the aromas and tastes of various cuisines.
        </p>
        <button className={styles.heroSectionButton} onClick={handleCTA}>
          Add recipe
        </button>
      </div>
      <div className={styles.heroImageOneContainer}></div>
      <div className={styles.heroImageTwoContainer}></div>
    </section>
  );
};

export default Hero;
