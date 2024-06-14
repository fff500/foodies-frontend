import { MainTitle, Subtitle, PrivateLink } from "../../shared";
import styles from "./HeroContentContainer.module.css";

export const HeroContentContainer = () => {
  return (
    <>
      <div className={styles.heroContentContainer}>
        <MainTitle className={styles.heroTitle} id="hero-title">
          Improve Your Culinary Talents
        </MainTitle>
        <Subtitle className={styles.heroSubtitle}>
          Amazing recipes for beginners in the world of cooking, enveloping you
          in the aromas and tastes of various cuisines.
        </Subtitle>
        <PrivateLink to={"/recipe/add"} className={styles.heroSectionButton}>
          Add recipe
        </PrivateLink>
      </div>
    </>
  );
};
