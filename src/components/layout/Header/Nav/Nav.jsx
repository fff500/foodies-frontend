import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

export const Nav = () => {
  return (
    <nav className={styles.headerNav}>
      <ul className={styles.headerNavList}>
        <li className={styles.headerNavItem}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={styles.headerNavItem}>
          <NavLink to="/recipe/add">Add recipe</NavLink>
        </li>
      </ul>
    </nav>
  );
};
