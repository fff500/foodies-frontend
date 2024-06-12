import classnames from "classnames";
import { Button } from "../../../shared";
import sprite from "../../../../assets/icons/sprite.svg";
import styles from "./BurgerMenu.module.css";

export const BurgerMenu = ({ isHomePage, handleMenuToggle }) => {
  return (
    <div className={styles.burgerMenu}>
      <Button
        onClick={() => handleMenuToggle()}
        className={styles.burgerMenuButton}
        type="button"
      >
        <svg
          width="28"
          height="28"
          className={classnames(styles.burgerMenuIcon, {
            [styles.burgerMenuHomeIcon]: isHomePage,
          })}
        >
          <use xlinkHref={`${sprite}#burger`} />
        </svg>
      </Button>
    </div>
  );
};
