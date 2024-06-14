import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../shared";
import styles from "./AuthButtons.module.css";
import { openModal } from "../../../../redux/";

export const AuthBar = () => {
  const { modalType } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleOpenRegisterModal = () => {
    dispatch(
      openModal({
        isOpen: true,
        modalType: "register",
      }),
    );
  };

  const handleOpenLoginModal = () => {
    dispatch(
      openModal({
        isOpen: true,
        modalType: "login",
      }),
    );
  };

  return (
    <div className={styles.authButtonsWrapper}>
      <ul className={styles.authButtonsList}>
        <li>
          <Button
            className={classnames(styles.signInButton, {
              [styles.active]: modalType === "login",
            })}
            type="button"
            onClick={handleOpenLoginModal}
          >
            Sign in
          </Button>
        </li>
        <li>
          <Button
            className={classnames(styles.signUpButton, {
              [styles.active]: modalType === "register" || !modalType,
            })}
            type="button"
            onClick={handleOpenRegisterModal}
          >
            Sign up
          </Button>
        </li>
      </ul>
    </div>
  );
};
