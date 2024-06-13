import styles from "./MainTitle.module.css";

export const MainTitle = ({ children, className }) => {
  return <h1 className={`${styles.mainTitle} ${className}`}>{children}</h1>;
};
