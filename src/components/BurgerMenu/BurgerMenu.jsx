import { Button } from "../Button";
import styles from "./BurgerMenu.module.css";
import sprite from "../../assets/icons/sprite.svg";
import classNames from "classnames";

export const BurgerMenu = ({ isHomePage }) => {
  return (
    <div className={styles.burgerMenu}>
      <Button className={styles.burgerMenuButton} type="button">
        <svg
          width="28"
          height="28"
          className={classNames(styles.burgerMenuIcon, {
            [styles.burgerMenuHomeIcon]: isHomePage,
          })}
        >
          <use xlinkHref={`${sprite}#burger`} />
        </svg>
      </Button>
    </div>
  );
};
