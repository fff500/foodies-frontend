import { useState } from "react";
import classnames from "classnames";
import { Button } from "../../../../Button";
import styles from "./AuthButtons.module.css";

export const AuthButtons = () => {
  const [activeButton, setActiveButton] = useState("signUp");

  const toggleActive = (button) => {
    setActiveButton(button);
  };

  return (
    <div className={styles.authButtons}>
      <ul>
        <li>
          <Button
            className={classnames(styles.signInButton, {
              [styles.active]: activeButton === "signIn",
            })}
            type="button"
            onClick={() => toggleActive("signIn")}
          >
            Sign in
          </Button>
        </li>

        <li>
          <Button
            className={classnames(styles.signUpButton, {
              [styles.active]: activeButton === "signUp",
            })}
            type="button"
            onClick={() => toggleActive("signUp")}
          >
            Sign up
          </Button>
        </li>
      </ul>
    </div>
  );
};
