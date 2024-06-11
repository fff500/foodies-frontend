import { useEffect } from "react";
import sprite from "../../../assets/icons/sprite.svg";

import styles from "./Modal.module.css";

export const Modal = ({ children, onClose }) => {
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

  const onBackdropClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.backdrop} onClick={onBackdropClick}>
      <div className={styles.container}>
        <button
          className={styles.closeBtn}
          type="button"
          onClick={() => onClose()}
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
