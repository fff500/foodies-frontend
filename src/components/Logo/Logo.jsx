import { PROJECT_NAME } from "../../utils";

import styles from "./Logo.module.css";

const Logo = () => <p className={styles.logo}>{PROJECT_NAME}</p>;

export default Logo;
