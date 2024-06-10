import classnames from "classnames";
import styles from "./Button.module.css";

export const Button = ({ children, onClick, className, type }) => {
  return (
    <button
      type={type}
      className={classnames(styles.btn, className)}
      onClick={onClick}
      aria-label="button"
    >
      {children}
    </button>
  );
};
