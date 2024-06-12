import { MODALS } from "../../../constants";
import { Modal } from "../Modal";
import styles from "./SignInModal.module.css";

export const SignInModal = ({ open, onClose }) => {
  return (
    <>
      {open && (
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
              <button className={styles.submitBtn} type="submit">
                SIGN IN
              </button>
              <p className={styles.message}>
                Don't have an account?{" "}
                <a className={styles.link} href="/">
                  Create an account
                </a>
              </p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
