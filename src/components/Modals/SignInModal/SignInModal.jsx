import classnames from "classnames";
import { useLocalStorage } from "@mantine/hooks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { MODALS, INPUT_CONFIG } from "../../../constants";
import { showError } from "../../../utils/";
import { useForm } from "react-hook-form";
import {
  useLoginUserMutation,
  closeModal,
  openModal,
  useGetCurrentUserQuery,
} from "../../../redux";
import { Button, LoadingSpinner } from "../../shared";
import { Modal } from "../Modal";
import { Input, PasswordInput } from "../Inputs";
import { signInValidationSchema } from "../validation";
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
      })
    );
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm({ mode: "all", resolver: yupResolver(signInValidationSchema) });

  const allFieldsFilled = watch(["email", "password"]).every((field) => field);
  const { refetch } = useGetCurrentUserQuery();

  const onSubmit = (data) => {
    login(data)
      .unwrap()
      .then((response) => {
        const token = response?.user?.token || null;

        if (token) {
          setToken(token);
          reset();
          dispatch(closeModal());
        }
        if (to) {
          navigate(to);
        }
        refetch();
      })
      .catch((e) => {
        console.log(e);
        showError(e.message);
      });
  };

  return (
    <>
      {isOpen && (
        <Modal onClose={onClose}>
          <div className={styles.container}>
            {isLoading && <LoadingSpinner />}
            <h3 className={styles.titleBlock}>{MODALS.signIn}</h3>
            <form
              className={styles.inputsBlock}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                register={register}
                errors={errors}
                config={INPUT_CONFIG.email}
              />
              <PasswordInput
                register={register}
                errors={errors}
                config={INPUT_CONFIG.password}
              />
              <Button
                className={classnames(styles.submitBtn, {
                  [styles.activeButton]: allFieldsFilled,
                })}
                type="submit"
              >
                SIGN IN
              </Button>
            </form>
            <div className={styles.submitBlock}>
              <p className={styles.message}>
                Don't have an account?
                <button
                  type="button"
                  className={styles.link}
                  onClick={handleOpenLoginModal}
                >
                  Create an account
                </button>
              </p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
