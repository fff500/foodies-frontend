import classnames from "classnames";
import { PROJECT_NAME } from "../../constants";
import styles from "./Logo.module.css";

export const Logo = () => (
  <p className={classnames(styles.logo)}>{PROJECT_NAME}</p>
);
