import styles from "./LoadingSpinner.module.css";
import classnames from "classnames";
import { Portal } from "../../Modals/Portal/Portal";

export const LoadingSpinner = ({ className, containerClassName }) => (
  <Portal>
    <div className={classnames(styles.spinnerContainer, containerClassName)}>
      <div className={classnames(styles.spinner, className)}></div>
    </div>
  </Portal>
);
