import styles from "./Button.module.css";
import classnames from "classnames";

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
