import classnames from "classnames";
import { Button } from "../../../Button";
import sprite from "../../../../assets/icons/sprite.svg";
import styles from "./BurgerMenu.module.css";

export const BurgerMenu = ({ isHomePage }) => {
  return (
    <div className={styles.burgerMenu}>
      <Button className={styles.burgerMenuButton} type="button">
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
