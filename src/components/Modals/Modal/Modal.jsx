import { useEffect, useState } from "react";
import sprite from "../../../assets/icons/sprite.svg";

import css from "./Modal.module.css";

const Modal = ({ onModalClick }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const onEscPress = (evt) => {
      if (evt.code === "Escape") {
        setIsOpen(false);
        onModalClick();
      }
    };

    document.addEventListener("keydown", onEscPress);

    return () => {
      document.removeEventListener("keydown", onEscPress);
    };
  }, [isOpen, onModalClick]);

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
        {isOpen && <p>OPEN</p>}
      </div>
    </div>
  );
};

export default Modal;
