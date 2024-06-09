import { useEffect, useState } from "react";
import sprite from "../../../assets/icons/sprite.svg";

import css from "./Modal.module.css";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const onEscPress = (evt) => {
      if (evt.code === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", onEscPress);

    return () => {
      document.removeEventListener("keydown", onEscPress);
    };
  }, [isOpen]);

  const onCloseClick = (evt) => {
    console.log("CLOSE PRESSED");
    setIsOpen(!isOpen);
  };

  return (
    <div className={css.container}>
      <button className={css.closeBtn} type="button" onClick={onCloseClick}>
        <svg className={css.closeSvg}>
          <use xlinkHref={`${sprite}#close`} />
        </svg>
      </button>
      {isOpen && <p>OPEN</p>}
    </div>
  );
};

export default Modal;
