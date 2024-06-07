import styles from "./AuthButtons.module.css";

const AuthButtons = () => {
  return (
    <div className={styles.authButtons}>
      <button className={(styles.signInButton, styles.active)}>Sign in</button>
      <button className={styles.signUpButton}>Sign up</button>
    </div>
  );
};

export default AuthButtons;
