import styles from "./HeroContentContainer.module.css";
import { PrivateLink } from "../../shared/PrivateLink/PrivateLink";

export const HeroContentContainer = () => {
  return (
    <>
      <div className={styles.heroContentContainer}>
        <h1 className={styles.heroTitle} id="hero-title">
          Improve Your Culinary Talents
        </h1>
        <p className={styles.heroSubtitle}>
          Amazing recipes for beginners in the world of cooking, enveloping you
          in the aromas and tastes of various cuisines.
        </p>
        <PrivateLink to={"/recipe/add"} className={styles.heroSectionButton}>
          Add recipe
        </PrivateLink>
      </div>
    </>
  );
};
