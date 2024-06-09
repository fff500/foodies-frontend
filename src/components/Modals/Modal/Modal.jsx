import { useEffect } from "react";
import sprite from "../../../assets/icons/sprite.svg";

import css from "./Modal.module.css";

const Modal = ({ children, onModalClick }) => {
  useEffect(() => {
    const onEscPress = (evt) => {
      if (evt.code === "Escape") {
        onModalClick();
      }
    };

    document.addEventListener("keydown", onEscPress);

    return () => {
      document.removeEventListener("keydown", onEscPress);
    };
  }, [onModalClick]);

  const onBackdropClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      onModalClick();
    }
  };

  return (
    <div className={css.backdrop} onClick={onBackdropClick}>
      <div className={css.container}>
        <button
          className={css.closeBtn}
          type="button"
          onClick={() => onModalClick()}
        >
          <svg className={css.closeSvg}>
            <use xlinkHref={`${sprite}#close`} />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
