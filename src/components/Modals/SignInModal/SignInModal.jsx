import css from "./SignInModal.module.css";

const SignInModal = ({ title }) => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>{title}</h3>
      <input className={css.input} type="email">
        2
      </input>
      <input className={css.input} type="password">
        3
      </input>
      <button className={css.submitBtn} type="submit"></button>
    </div>
  );
};

export default SignInModal;
