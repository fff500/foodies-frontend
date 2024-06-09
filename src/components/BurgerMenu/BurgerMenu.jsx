import { Button } from "../Button";
import styles from "./BurgerMenu.module.css";
import sprite from "../../assets/icons/sprite.svg";

export const BurgerMenu = ({ isHomePage }) => {
  return (
    <div className={styles.burgerMenu}>
      <Button className={styles.burgerMenuButton} type="button">
        <svg
          width="28"
          height="28"
          className={`${styles.burgerMenuIcon} ${isHomePage ? styles.burgerMenuHomeIcon : ""}`}
        >
          <use xlinkHref={`${sprite}#burger`} />
        </svg>
      </Button>
    </div>
  );
};
