import { PROJECT_NAME } from "../../constants";
import styles from "./Logo.module.css";

export const Logo = () => <p className={styles.logo}>{PROJECT_NAME}</p>;
