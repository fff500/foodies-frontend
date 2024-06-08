import { Button } from "../Button";
import styles from "./BurgerMenu.module.css";

export const BurgerMenu = ({ isHomePage }) => {
  return (
    <div className={styles.burgerMenu}>
      <Button className={styles.burgerMenuButton} type="button">
        <svg
          className={`${styles.burgerMenuIcon} ${isHomePage ? styles.burgerMenuHomeIcon : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
        >
          <path
            d="M24.5 11.6665H3.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.5 7H3.5"
            stroke="currentColor"
            stroke-width="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.5 16.3335H3.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.5 21H3.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
    </div>
  );
};
