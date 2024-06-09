import css from "./LogOutModal.module.css";

const LogOutModal = ({ title }) => {
  return (
    <div className={css.container}>
      <div className={css.titleBlock}>
        <h3 className={css.title}>{title}</h3>
        <p className={css.message}>You can always log back in at my time.</p>
      </div>
      <div className={css.submitBlock}>
        <button className={css.logoutBtn} type="submit">
          LOG OUT
        </button>
        <button className={css.cancelBtn} type="submit">
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default LogOutModal;
