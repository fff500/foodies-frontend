import styles from "./LogOutModal.module.css";

export const LogOutModal = ({ title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleBlock}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.message}>You can always log back in at my time.</p>
      </div>
      <div className={styles.submitBlock}>
        <button className={styles.logoutBtn} type="submit">
          LOG OUT
        </button>
        <button className={styles.cancelBtn} type="submit">
          CANCEL
        </button>
      </div>
    </div>
  );
};
