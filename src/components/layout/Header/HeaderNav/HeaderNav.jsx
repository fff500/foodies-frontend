import { NavLink } from "react-router-dom";
import classnames from "classnames";
import styles from "./HeaderNav.module.css";

export const HeaderNav = () => {
  return (
    <nav className={styles.headerNav}>
      <ul className={styles.headerNavList}>
        <li className={styles.headerNavItem}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              classnames(styles.navLink, styles.homeLink, {
                [styles.active]: isActive,
              })
            }
          >
            Home
          </NavLink>
        </li>
        <li className={styles.headerNavItem}>
          <NavLink
            to="/recipe/add"
            className={({ isActive }) =>
              classnames(styles.navLink, styles.recipeLink, {
                [styles.active]: isActive,
              })
            }
          >
            Add recipe
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
