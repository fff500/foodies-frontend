import { Icon } from "../../../shared";
import { networkLinks } from "./data";
import styles from "./NetworkLinks.module.css";

export const NetworkLinks = () => (
  <ul className={styles.networkLinks}>
    {networkLinks.map(({ id, link }) => (
      <li key={id}>
        <a
          href={link}
          className={styles.networkLink}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <Icon id={id} width={20} height={20} />
        </a>
      </li>
    ))}
  </ul>
);
