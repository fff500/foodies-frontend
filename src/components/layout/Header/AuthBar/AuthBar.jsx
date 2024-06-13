import { useState } from "react";
import classnames from "classnames";
import { Button } from "../../../shared";
import { SignInModal } from "../../../Modals/SignInModal";
import { SignUpModal } from "../../../Modals/SignUpModal";
import styles from "./AuthBar.module.css";

export const AuthBar = ({ onSignIn }) => {
  const [activeButton, setActiveButton] = useState("signUp");
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);

  const openSignInModal = () => {
    setActiveButton("signIn");
    setSignInModalOpen(true);
    setSignUpModalOpen(false);
  };

  const openSignUpModal = () => {
    setActiveButton("signUp");
    setSignUpModalOpen(true);
    setSignInModalOpen(false);
  };

  const closeModals = () => {
    setSignInModalOpen(false);
    setSignUpModalOpen(false);
  };

  return (
    <div className={styles.authButtonsWrapper}>
      <ul className={styles.authButtonsList}>
        <li className={styles.authButtonsItem}>
          <Button
            className={classnames(styles.signInButton, {
              [styles.active]: activeButton === "signIn",
            })}
            type="button"
            onClick={openSignInModal}
          >
            Sign in
          </Button>
        </li>
        <li className={styles.authButtonsItem}>
          <Button
            className={classnames(styles.signUpButton, {
              [styles.active]: activeButton === "signUp",
            })}
            type="button"
            onClick={openSignUpModal}
          >
            Sign up
          </Button>
        </li>
      </ul>

      <SignInModal
        isOpen={isSignInModalOpen}
        onClose={closeModals}
        onSignIn={onSignIn}
      />
      <SignUpModal isOpen={isSignUpModalOpen} onClose={closeModals} />
    </div>
  );
};
