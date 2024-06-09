import { NavLink } from "react-router-dom";
import styles from "./HeaderNav.module.css";

export const HeaderNav = () => {
  return (
    <nav className={styles.headerNav}>
      <ul className={styles.headerNavList}>
        <li className={styles.headerNavItem}>
          <NavLink to="/" className={`${styles.homeLink} ${styles.navLink}`}>
            Home
          </NavLink>
        </li>
        <li className={styles.headerNavItem}>
          <NavLink
            to="/recipe"
            className={`${styles.recipeLink} ${styles.navLink}`}
          >
            Add recipe
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
