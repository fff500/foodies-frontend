import styles from "./Button.module.css";

export const Button = ({ children, onClick, className, type }) => {
  return (
    <button
      type={type}
      className={`${styles.btn} ${className}`}
      onClick={onClick}
      aria-label="button"
    >
      {children}
    </button>
  );
};
