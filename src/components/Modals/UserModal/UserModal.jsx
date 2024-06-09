import sprite from "../../../assets/icons/sprite.svg";

import css from "./UserModal.module.css";

const UserModal = () => {
  return (
    <div className={css.container}>
      <button className={css.submitBtn} type="button">
        PROFILE
      </button>
      <button className={css.submitBtn} type="button">
        LOG OUT{" "}
        <span>
          <svg className={css.svg}>
            <use xlinkHref={`${sprite}#arrowUpRight`} />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default UserModal;
