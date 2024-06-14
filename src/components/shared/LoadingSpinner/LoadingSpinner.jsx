import styles from "./LoadingSpinner.module.css";
import classnames from "classnames";

export const LoadingSpinner = ({ className, containerClassName }) => (
  <div className={classnames(styles.spinnerContainer, containerClassName)}>
    <div className={classnames(styles.spinner, className)}></div>
  </div>
);
