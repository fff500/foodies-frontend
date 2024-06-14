import { Link } from "react-router-dom";
import { Icon } from "../../../shared";
import { networkLinks } from "./data";
import styles from "./NetworkLinks.module.css";

export const NetworkLinks = () => (
  <ul className={styles.networkLinks}>
    {networkLinks.map(({ id, link }) => (
      <li key={id}>
        <Link
          to={link}
          className={styles.networkLink}
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label={id}
        >
          <Icon id={id} width={20} height={20} />
        </Link>
      </li>
    ))}
  </ul>
);
