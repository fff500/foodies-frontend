import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useLocalStorage } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  useCreateUserMutation,
  useLoginUserMutation,
  closeModal,
  openModal,
} from "../../../redux";
import { INPUT_CONFIG, MODALS } from "../../../constants";
import { Button, LoadingSpinner } from "../../shared";
import { Modal } from "../Modal";
import { Input } from "../Inputs";
import { PasswordInput } from "../Inputs";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../validation";
import styles from "./SignUpModal.module.css";

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
  } = useForm({ mode: "all", resolver: yupResolver(validationSchema) });

  const allFieldsFilled = watch(["name", "email", "password"]).every(
    (field) => field
  );

  const onSubmit = async (data) => {
    create(data)
      .unwrap()
      .then(() => {
        login({ password: data.password, email: data.email })
          .unwrap()
          .then(({ user: { token } }) => {
            setToken(token);
            if (to) {
              navigate(to);
            }
            dispatch(closeModal());
            reset();
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
            <form
              className={styles.inputsBlock}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                register={register}
                errors={errors}
                config={INPUT_CONFIG.name}
              />
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
                CREATE
              </Button>
            </form>
            <div className={styles.submitBlock}>
              <p className={styles.message}>
                I already have an account?{" "}
                <button
                  type="button"
                  onClick={handleOpenLoginModal}
                  className={styles.link}
                >
                  Sign in
                </button>
              </p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
