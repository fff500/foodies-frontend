import { useNavigate } from "react-router-dom";
import { MODALS } from "../../../constants";
import { Modal } from "../Modal";
import styles from "./LogOutModal.module.css";
import { useLocalStorage } from "@mantine/hooks";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux/modalSlice";

export const LogOutModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [_, setToken] = useLocalStorage({
    key: "token",
  });
  const handleLogOut = () => {
    setToken(null);
    dispatch(closeModal());
    navigate("/");
  };

  return (
    <>
      {isOpen && (
        <Modal onClose={onClose}>
          <div className={styles.container}>
            <div className={styles.titleBlock}>
              <h3 className={styles.title}>{MODALS.logOut}</h3>
              <p className={styles.message}>
                You can always log back in at my time.
              </p>
            </div>
            <div className={styles.submitBlock}>
              <button
                className={styles.logoutBtn}
                type="button"
                onClick={() => {
                  handleLogOut();
                }}
              >
                LOG OUT
              </button>
              <button className={styles.cancelBtn} onClick={onClose}>
                CANCEL
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
