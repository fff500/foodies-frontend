import { useEffect } from "react";
import { Logo } from "../../shared";
import { NavLink } from "react-router-dom";
import { HeroImageContainer } from "../../Hero/HeroImageContainer";
import sprite from "../../../assets/icons/sprite.svg";

import css from "./BurgerModal.module.css";

const BurgerModal = ({ onBurgerMenuClick }) => {
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
    <div className={css.backdrop}>
      <div className={css.header}>
        <Logo />
        <button
          className={css.closeBtn}
          type="button"
          onClick={() => onBurgerMenuClick()}
        >
          <svg className={css.closeSvg}>
            <use xlinkHref={`${sprite}#close`} />
          </svg>
        </button>
      </div>
      <ul className={css.headerNavList}>
        <li className={css.headerNavItem}>
          <NavLink to="/" className={css.homeLink}>
            Home
          </NavLink>
        </li>
        <li className={css.headerNavItem}>
          <NavLink
            to="/recipe"
            className={css.recipeLink}
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

export default BurgerModal;
