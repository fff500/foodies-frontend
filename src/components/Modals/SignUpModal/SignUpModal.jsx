import { Link } from "react-router-dom";
import { MODALS } from "../../../constants";
import { Button } from "../../shared";
import { Modal } from "../Modal";
import styles from "./SignUpModal.module.css";

export const SignUpModal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
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
              <Button className={styles.submitBtn} type="submit">
                CREATE
              </Button>
              <p className={styles.message}>
                I already have an account?{" "}
                <Link className={styles.link} to="/">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
