import classnames from "classnames";
import styles from "./MainTitle.module.css";

export const MainTitle = ({ children, className }) => {
  return (
    <h1 className={classnames(styles.mainTitle, className)}>{children}</h1>
  );
};
