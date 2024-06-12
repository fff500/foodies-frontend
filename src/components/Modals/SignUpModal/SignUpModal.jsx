import { MODALS } from "../../../constants";
import { Modal } from "../Modal";
import styles from "./SignUpModal.module.css";

export const SignUpModal = ({ open, onClose }) => {
  return (
    <>
      {open && (
        <Modal onClose={onClose}>
          <div className={styles.container}>
            <h3 className={styles.titleBlock}>{MODALS.signUp}</h3>
            <div className={styles.inputsBlock}>
              <input className={styles.input} placeholder="name" type="text" />
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
                CREATE
              </button>
              <p className={styles.message}>
                I already have an account?{" "}
                <a className={styles.link} href="/">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
