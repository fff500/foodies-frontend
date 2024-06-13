import { Link } from "react-router-dom";
import { PROJECT_NAME } from "../../../constants";
import styles from "./Logo.module.css";

export const Logo = ({ className }) => (
  <Link to="/" className={className}>
    <span className={styles.logo}>{PROJECT_NAME}</span>
  </Link>
);
