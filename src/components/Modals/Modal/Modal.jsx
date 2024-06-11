import { useEffect } from "react";
import sprite from "../../../assets/icons/sprite.svg";

import styles from "./Modal.module.css";

export const Modal = ({ children, onModalClick }) => {
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
    <div className={styles.backdrop} onClick={onBackdropClick}>
      <div className={styles.container}>
        <button
          className={styles.closeBtn}
          type="button"
          onClick={() => onModalClick()}
        >
          <svg className={styles.closeSvg}>
            <use xlinkHref={`${sprite}#close`} />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};
