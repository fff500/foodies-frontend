import sprite from "../../../assets/icons/sprite.svg";

import css from "./Modal.module.css";

const Modal = () => {
  return (
    <div className={css.container}>
      <button className={css.closeBtn} type="button">
        <svg className={css.closeSvg}>
          <use xlinkHref={`${sprite}#close`} />
        </svg>
      </button>
    </div>
  );
};

export default Modal;
