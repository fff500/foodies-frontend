import classnames from "classnames";
import { useLocalStorage } from "@mantine/hooks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MODALS, INPUT_CONFIG } from "../../../constants";
import { useForm } from "react-hook-form";
import { useLoginUserMutation, closeModal, openModal } from "../../../redux";
import { Button, LoadingSpinner } from "../../shared";
import { Modal } from "../Modal";
import { Input, PasswordInput } from "../Inputs";
import { yupResolver } from "@hookform/resolvers/yup";
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

  const onSubmit = async (data) => {
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
      reset();
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
