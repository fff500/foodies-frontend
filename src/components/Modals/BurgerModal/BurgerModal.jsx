import css from "./BurgerModal.module.css";

const BurgerModal = ({ title }) => {
  return (
    <div className={css.container}>
      <h3 className={css.titleBlock}>{title}</h3>
      <div className={css.inputsBlock}>
        <input className={css.input} placeholder="name" type="text" />
        <input className={css.input} placeholder="email" type="email" />
        <input className={css.input} placeholder="password" type="password" />
      </div>
      <div className={css.submitBlock}>
        <button className={css.submitBtn} type="submit">
          CREATE
        </button>
        <p className={css.message}>
          I already have an account?{" "}
          <a className={css.link} href="/">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default BurgerModal;
