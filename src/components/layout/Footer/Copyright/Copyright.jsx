import { PROJECT_NAME } from "../../../../constants";
import styles from "./Copyright.module.css";

export const Copyright = () => (
  <span className={styles.copyright}>
    @2024, {PROJECT_NAME}. All rights reserved
  </span>
);
