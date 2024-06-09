import { useState } from "react";
import { Button } from "../Button";
import styles from "./AuthButtons.module.css";

export const AuthButtons = () => {
  const [activeButton, setActiveButton] = useState("signUp");

  const toggleActive = (button) => {
    setActiveButton(button);
  };

  return (
    <div className={styles.authButtons}>
      <Button
        className={`${styles.signInButton} ${activeButton === "signIn" ? styles.active : ""}`}
        type="button"
        onClick={() => toggleActive("signIn")}
      >
        Sign in
      </Button>
      <Button
        className={`${styles.signUpButton} ${activeButton === "signUp" ? styles.active : ""}`}
        type="button"
        onClick={() => toggleActive("signUp")}
      >
        Sign up
      </Button>
    </div>
  );
};
