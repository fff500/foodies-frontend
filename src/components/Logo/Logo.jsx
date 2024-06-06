import { projectName } from "../../utils";

import styles from "./Logo.module.css";

const Logo = () => <p className={styles.logo}>{projectName}</p>;

export default Logo;
