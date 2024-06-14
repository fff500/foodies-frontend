import classnames from "classnames";
import styles from "./Subtitle.module.css";

export const Subtitle = ({ children, className }) => {
  return <h2 className={classnames(styles.subtitle, className)}>{children}</h2>;
};
