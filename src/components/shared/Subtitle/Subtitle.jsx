import styles from "./Subtitle.module.css";

export const Subtitle = ({ children, className }) => {
  return <h2 className={`${styles.subtitle} ${className}`}>{children}</h2>;
};
