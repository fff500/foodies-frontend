import { Link } from "react-router-dom";
import { MODALS } from "../../../constants";
import { Button } from "../../shared";
import { Modal } from "../Modal";
import styles from "./SignInModal.module.css";

export const SignInModal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <Modal onClose={onClose}>
          <div className={styles.container}>
            <h3 className={styles.titleBlock}>{MODALS.signIn}</h3>
            <div className={styles.inputsBlock}>
              <input
                className={styles.input}
                placeholder="email"
                type="email"
              />
              <input
                className={styles.input}
                placeholder="password"
                type="password"
              />
            </div>
            <div className={styles.submitBlock}>
              <Button className={styles.submitBtn} type="submit">
                SIGN IN
              </Button>
              <p className={styles.message}>
                Don't have an account?{" "}
                <Link className={styles.link} to="/">
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
