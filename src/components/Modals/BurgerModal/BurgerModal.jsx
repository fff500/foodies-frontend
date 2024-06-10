import { useEffect } from "react";
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

  const onBackdropClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      onBurgerMenuClick();
    }
  };

  return (
    <div className={css.backdrop} onClick={onBackdropClick}>
      <div className={css.header}>
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
    </div>
  );
};

export default BurgerModal;
