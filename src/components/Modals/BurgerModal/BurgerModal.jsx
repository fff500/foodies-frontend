import { useEffect } from "react";
import { Logo } from "../../shared";
import { NavLink } from "react-router-dom";
import { HeroImageContainer } from "../../Hero/HeroImageContainer";
import sprite from "../../../assets/icons/sprite.svg";

import styles from "./BurgerModal.module.css";

export const BurgerModal = ({ onBurgerMenuClick }) => {
  useEffect(() => {
    const onEscPress = (evt) => {
      if (evt.code === "Escape") {
        onBurgerMenuClick();
      }
    };

    document.addEventListener("keydown", onEscPress);

    return () => {
      document.removeEventListener("keydown", onEscPress);
    };
  }, [onBurgerMenuClick]);

  return (
    <div className={styles.backdrop}>
      <div className={styles.header}>
        <Logo />
        <button
          className={styles.closeBtn}
          type="button"
          onClick={() => onBurgerMenuClick()}
        >
          <svg className={styles.closeSvg}>
            <use xlinkHref={`${sprite}#close`} />
          </svg>
        </button>
      </div>
      <ul className={styles.headerNavList}>
        <li className={styles.headerNavItem}>
          <NavLink to="/" className={styles.homeLink}>
            Home
          </NavLink>
        </li>
        <li className={styles.headerNavItem}>
          <NavLink
            to="/recipe"
            className={styles.recipeLink}
            state={{ recipe: "Add recipe" }}
          >
            Add recipe
          </NavLink>
        </li>
      </ul>
      <HeroImageContainer />
    </div>
  );
};
