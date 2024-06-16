import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLocalStorage } from "@mantine/hooks";
import {
  closeModal,
  useLogoutUserMutation,
  createApiUsers,
} from "../../../redux";
import { MODALS } from "../../../constants";
import { Button } from "../../shared";
import { Modal } from "../Modal";
import styles from "./LogOutModal.module.css";

export const LogOutModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logout] = useLogoutUserMutation();
  const [, setToken] = useLocalStorage({
    key: "token",
  });
  const handleLogOut = () => {
    logout();
    setToken(null);
    dispatch(createApiUsers.util.resetApiState());
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
              <Button
                className={styles.logoutBtn}
                type="button"
                onClick={() => {
                  handleLogOut();
                }}
              >
                LOG OUT
              </Button>
              <Button className={styles.cancelBtn} onClick={onClose}>
                CANCEL
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
