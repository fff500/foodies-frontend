import { useLocalStorage } from "@mantine/hooks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MODALS } from "../../../constants";
import { useLoginUserMutation, closeModal, openModal } from "../../../redux";
import { Button, LoadingSpinner } from "../../shared";
import { Modal } from "../Modal";
import styles from "./SignInModal.module.css";

export const SignInModal = ({ isOpen, onClose }) => {
  const [, setToken] = useLocalStorage({
    key: "token",
  });
  const dispatch = useDispatch();
  const { to } = useSelector((state) => state.modal);
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginUserMutation();
  const handleOpenLoginModal = () => {
    dispatch(
      openModal({
        isOpen: true,
        modalType: "register",
        to,
      }),
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    try {
      const {
        data: {
          user: { token },
        },
      } = await login(data);
      setToken(token);
      if (to) {
        navigate(to);
      }
      dispatch(closeModal());
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {isOpen && (
        <Modal onClose={onClose}>
          <div className={styles.container}>
            {isLoading && <LoadingSpinner />}
            <h3 className={styles.titleBlock}>{MODALS.signIn}</h3>
            <form className={styles.inputsBlock} onSubmit={handleSubmit}>
              <input
                id="email"
                name="email"
                autoFocus
                className={styles.input}
                placeholder="email"
                type="email"
              />
              <input
                id="password"
                name="password"
                className={styles.input}
                placeholder="password"
                type="password"
              />
              <Button className={styles.submitBtn} type="submit">
                SIGN IN
              </Button>
            </form>
            <div className={styles.submitBlock}>
              <p className={styles.message}>
                Don't have an account?{" "}
                <span
                  role="button"
                  className={styles.link}
                  onClick={handleOpenLoginModal}
                >
                  Create an account
                </span>
              </p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
