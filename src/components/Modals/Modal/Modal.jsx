import { useEffect } from "react";
import sprite from "../../../assets/icons/sprite.svg";
import styles from "./Modal.module.css";
// import { Icon,Button } from "../../shared";
import { Button } from "../../shared";
import { Portal } from "../Portal/Portal";

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

  const portal = document.getElementById("portal-root");

  return (
    <Portal portal={portal}>
      <div className={styles.backdrop} onClick={onBackdropClick}>
        <div className={styles.container}>
          <Button
            className={styles.closeBtn}
            type="button"
            onClick={() => onClose()}
          >
            {/* <Icon className={styles.closeSvg} id={"close"} /> */}
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
