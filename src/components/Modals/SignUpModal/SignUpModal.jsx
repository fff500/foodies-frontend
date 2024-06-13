import { MODALS } from "../../../constants";
import { Button, LoadingSpinner } from "../../shared";
import { Modal } from "../Modal";
import styles from "./SignUpModal.module.css";
import { useDispatch } from "react-redux";
import { closeModal, openModal } from "../../../redux/modalSlice";
import { useCreateUserMutation, useLoginUserMutation } from "../../../redux";
import { useLocalStorage } from "@mantine/hooks";

export const SignUpModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const [create, { isLoading }] = useCreateUserMutation();
  const [login, { isLoading: isLoadingLogin }] = useLoginUserMutation();
  const [token, setToken] = useLocalStorage({
    key: "token",
  });
  const handleOpenLoginModal = () => {
    dispatch(
      openModal({
        isOpen: true,
        modalType: "login",
      }),
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData.entries());
    create(data)
      .unwrap()
      .then(() => {
        login({ password: data.password, email: data.email })
          .unwrap()
          .then(({ user: { token } }) => {
            console.log(token);
            setToken(token);
            dispatch(closeModal());
          });
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      {isOpen && (
        <Modal onClose={onClose}>
          <div className={styles.container}>
            {isLoading || (isLoadingLogin && <LoadingSpinner />)}
            <h3 className={styles.titleBlock}>{MODALS.signUp}</h3>
            <form className={styles.inputsBlock} onSubmit={handleSubmit}>
              <input
                id="name"
                name="name"
                className={styles.input}
                placeholder="name"
                type="text"
              />
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
                min="6"
              />
              <button className={styles.submitBtn} type="submit">
                CREATE
              </button>
            </form>
            <div className={styles.submitBlock}>
              <p className={styles.message}>
                I already have an account?
                <span
                  role="button"
                  onClick={handleOpenLoginModal}
                  className={styles.link}
                >
                  Sign in
                </span>
              </p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
