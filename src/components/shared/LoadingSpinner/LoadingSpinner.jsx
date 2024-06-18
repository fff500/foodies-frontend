import styles from "./LoadingSpinner.module.css";
import classnames from "classnames";
import { Portal } from "../../Modals/Portal/Portal";

export const LoadingSpinner = ({ className, containerClassName }) => (
  <Portal>
    <div className={classnames(styles.spinnerContainer, containerClassName)}>
      <div className={styles.loader}>
        <div className={`${styles.loaderItem} ${styles.loaderItem1}`}></div>
        <div className={styles.loaderItem}></div>
        <div className={styles.loaderItem}></div>
        <div className={styles.loaderItem}></div>
        <div className={`${styles.loaderItem} ${styles.loaderItem5}`}></div>
        <div className={styles.loaderItem}></div>
        <div className={styles.loaderItem}></div>
        <div className={styles.loaderItem}></div>
        <div className={`${styles.loaderItem} ${styles.loaderItem9}`}></div>
      </div>
    </div>
  </Portal>
);
