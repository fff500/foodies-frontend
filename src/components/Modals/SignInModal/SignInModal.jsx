import { MODALS } from "../../../constants";
import { Button, LoadingSpinner } from "../../shared";
import { Modal } from "../Modal";
import styles from "./SignInModal.module.css";
import { useDispatch } from "react-redux";
import { closeModal, openModal } from "../../../redux/modalSlice";
import { useLoginUserMutation } from "../../../redux";
import { useLocalStorage } from "@mantine/hooks";

export const SignInModal = ({ isOpen, onClose }) => {
  const [_, setToken] = useLocalStorage({
    key: "token",
  });
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginUserMutation();
  const handleOpenLoginModal = () => {
    dispatch(
      openModal({
        isOpen: true,
        modalType: "register",
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
