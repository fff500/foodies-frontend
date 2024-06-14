import { useDispatch, useSelector } from "react-redux";
import { useLocalStorage } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import {
  useCreateUserMutation,
  useLoginUserMutation,
  closeModal,
  openModal,
} from "../../../redux";
import { MODALS } from "../../../constants";
import { Button, LoadingSpinner } from "../../shared";
import { Modal } from "../Modal";
import styles from "./SignUpModal.module.css";
import { useDispatch } from "react-redux";
import { closeModal, openModal } from "../../../redux/modalSlice";
import { useCreateUserMutation, useLoginUserMutation } from "../../../redux";
import { useLocalStorage } from "@mantine/hooks";
import { Input } from "../Inputs/Input";
import { PasswordInput } from "../Inputs/PasswordInput";

export const SignUpModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { to } = useSelector((state) => state.modal);
  const navigate = useNavigate();
  const [create, { isLoading }] = useCreateUserMutation();
  const [login, { isLoading: isLoadingLogin }] = useLoginUserMutation();
  const [, setToken] = useLocalStorage({
    key: "token",
  });

  const handleOpenLoginModal = () => {
    dispatch(
      openModal({
        isOpen: true,
        modalType: "login",
      })
        to,
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
            if (to) {
              navigate(to);
            }
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
              <Input name={"name"} type={"text"} placeholder={"Name*"} />
              <Input name={"email"} type={"email"} placeholder={"Email*"} />
              <PasswordInput />
              <Button className={styles.submitBtn} type="submit">
                CREATE
              </Button>
            </form>
            <div className={styles.submitBlock}>
              <p className={styles.message}>
                I already have an account?{" "}
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
