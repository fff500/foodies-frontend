import { Button } from "../Button";
import styles from "./AuthButtons.module.css";

export const AuthButtons = () => {
  return (
    <div className={styles.authButtons}>
      <Button className={styles.signInButton} type="button">
        Sign in
      </Button>
      <Button
        className={`${styles.signUpButton} ${styles.active}`}
        type="button"
      >
        Sign up
      </Button>
    </div>
  );
};
