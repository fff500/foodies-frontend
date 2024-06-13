import { useEffect } from "react";
import sprite from "../../../assets/icons/sprite.svg";
import { Button } from "../../shared";
import { Portal } from "../Portal/Portal";
import styles from "./Modal.module.css";

export const Modal = ({ children, onClose }) => {
  const portal = document.getElementById("portal-root");

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
    <Portal portal={portal}>
      <div role="dialog" className={styles.backdrop} onClick={onBackdropClick}>
        <div className={styles.container}>
          <Button
            className={styles.closeBtn}
            type="button"
            onClick={() => onClose()}
          >
            <svg className={styles.closeSvg}>
              <use xlinkHref={`${sprite}#close`} />
            </svg>
          </Button>
          {children}
        </div>
      </div>
    </Portal>
  );
};
