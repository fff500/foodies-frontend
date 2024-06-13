import { useLocalStorage } from "@mantine/hooks";
import { useDispatch } from "react-redux";
import { MODALS } from "../../../constants";
import { useLoginUserMutation, closeModal, openModal } from "../../../redux";
import { Button, LoadingSpinner } from "../../shared";
import { Modal } from "../Modal";
import styles from "./SignInModal.module.css";
import { Input } from "../Inputs/Input";
import { PasswordInput } from "../Inputs/PasswordInput";

export const SignInModal = ({ isOpen, onClose }) => {
  const [, setToken] = useLocalStorage({
    key: "token",
  });
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginUserMutation();
  const handleOpenLoginModal = () => {
    dispatch(
      openModal({
        isOpen: true,
        modalType: "register",
      })
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
              <Input name={"email"} type={"email"} placeholder={"Email*"} />
              <PasswordInput />
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
