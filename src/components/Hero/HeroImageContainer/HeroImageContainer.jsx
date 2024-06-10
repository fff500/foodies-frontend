import styles from "./HeroImageContainer.module.css";

export const HeroImageContainer = () => {
  return (
    <div className={styles.heroImageContainer}>
      <div className={styles.heroLeftImageContainer}></div>
      <div className={styles.heroRightImageContainer}></div>
    </div>
  );
};
