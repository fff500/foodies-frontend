import { NavLink } from "react-router-dom";
import classnames from "classnames";
import styles from "./Nav.module.css";

export const Nav = ({ isHomePage }) => {
  return (
    <nav className={styles.headerNav}>
      <ul className={styles.headerNavList}>
        <li className={styles.headerNavItem}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              classnames(styles.headerNavLink, { [styles.active]: isActive })
            }
          >
            Home
          </NavLink>
        </li>
        <li
          className={classnames(styles.headerNavItem, {
            [styles.notHomePage]: !isHomePage,
          })}
        >
          <NavLink
            to="/recipe/add"
            className={({ isActive }) =>
              classnames(styles.headerNavLink, { [styles.active]: isActive })
            }
          >
            Add recipe
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
