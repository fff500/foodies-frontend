import { MODALS } from "../../../constants";
import { Button } from "../../shared";
import { Modal } from "../Modal";
import styles from "./LogOutModal.module.css";

export const LogOutModal = ({ isOpen, onClose, onLogout }) => {
  return (
    <>
      {isOpen && (
        <Modal onClose={onClose}>
          <div className={styles.container}>
            <div className={styles.titleBlock}>
              <h3 className={styles.title}>{MODALS.logOut}</h3>
              <p className={styles.message}>
                You can always log back in at any time.
              </p>
            </div>
            <div className={styles.submitBlock}>
              <Button
                className={styles.logoutBtn}
                type="button"
                onClick={onLogout}
              >
                LOG OUT
              </Button>
              <Button
                className={styles.cancelBtn}
                type="button"
                onClick={onClose}
              >
                CANCEL
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
