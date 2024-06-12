import styles from "./LoadingSpinner.module.css";
import classnames from "classnames";

export const LoadingSpinner = ({ className }) => (
  <div className={styles.spinnerContainer}>
    <div className={classnames(styles.spinner, className)}></div>
  </div>
);
