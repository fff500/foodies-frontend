import sprite from "../../../assets/icons/sprite.svg";
import styles from "./Input.module.css";
import passwordStyles from "./PasswordInput.module.css";

export const PasswordInput = ({ register, errors, config }) => {
  return (
    <div className={styles.container}>
      <div className={passwordStyles.passInput}>
        <input
          id={config.name}
          className={styles.input}
          placeholder={config.placeholder}
          type={config.type}
          {...register(`${config.name}`, config.validation)}
        />
        <svg className={passwordStyles.showPassword}>
          <use xlinkHref={`${sprite}#showPassword`} />
        </svg>
      </div>
      <p className={styles.errorMsg}>
        {errors[config.name] && <span>{errors[config.name].message}</span>}
      </p>
    </div>
  );
};
