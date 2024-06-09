import css from "./SignInModal.module.css";

const SignInModal = ({ title }) => {
  return (
    <div className={css.container}>
      <h3 className={css.titleBlock}>{title}</h3>
      <div className={css.inputsBlock}>
        <input className={css.input} placeholder="email" type="email" />
        <input className={css.input} placeholder="password" type="password" />
      </div>
      <div className={css.submitBlock}>
        <button className={css.submitBtn} type="submit">
          CREATE
        </button>
        <p className={css.message}>
          Don't have an account?{" "}
          <a className={css.link} href="/">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignInModal;
