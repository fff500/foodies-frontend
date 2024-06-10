import styles from "./Hero.module.css";
import { HeroImageContainer } from "./HeroImageContainer";
import { HeroContentContainer } from "./HeroContentContainer";

export const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <HeroContentContainer />
      <HeroImageContainer />
    </section>
  );
};
