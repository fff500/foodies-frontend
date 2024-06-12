import { useEffect } from "react";
import { Logo } from "../../shared";
import { NavLink } from "react-router-dom";
import { HeroImageContainer } from "../../Hero/HeroImageContainer";
import sprite from "../../../assets/icons/sprite.svg";

import styles from "./BurgerModal.module.css";

export const BurgerModal = ({ open, onClose }) => {
  useEffect(() => {
    const onEscPress = (evt) => {
      if (evt.code === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onEscPress);

    return () => {
      document.removeEventListener("keydown", onEscPress);
    };
  }, [onClose]);

  return (
    <>
      {open && (
        <div className={styles.backdrop}>
          <div className={styles.header}>
            <Logo />
            <button
              className={styles.closeBtn}
              type="button"
              onClick={() => onClose()}
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
      )}
    </>
  );
};
