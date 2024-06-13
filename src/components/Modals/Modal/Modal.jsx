import { useEffect } from "react";
import { Icon, Button } from "../../shared";
import { Portal } from "../Portal/Portal";
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
            <Icon className={styles.closeIcon} id={"close"} />
          </Button>
          {children}
        </div>
      </div>
    </Portal>
  );
};
