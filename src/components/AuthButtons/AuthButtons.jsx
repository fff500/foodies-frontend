import styles from "./AuthButtons.module.css";

export const AuthButtons = () => {
  return (
    <div className={styles.authButtons}>
      <button className={(styles.signInButton, styles.active)}>Sign in</button>
      <button className={styles.signUpButton}>Sign up</button>
    </div>
  );
};
