import { useCallback } from "react";
import styles from "./HeroContentContainer.module.css";

export const HeroContentContainer = () => {
  const handleCTA = useCallback(() => {
    console.log(
      "TODO: add here logic for CTA. If authorize - navigate to AddRecipePage, otherwise open SingInModal"
    );
  }, []);
  return (
    <div className={styles.heroContentContainer}>
      <h1 className={styles.heroTitle} id="hero-title">
        Improve Your Culinary Talents
      </h1>
      <p className={styles.heroSubtitle}>
        Amazing recipes for beginners in the world of cooking, enveloping you in
        the aromas and tastes of various cuisines.
      </p>
      <button className={styles.heroSectionButton} onClick={handleCTA}>
        Add recipe
      </button>
    </div>
  );
};
