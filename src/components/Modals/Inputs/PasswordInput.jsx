import styles from "./Input.module.css";
import passwordStyles from "./PasswordInput.module.css";
import sprite from "../../../assets/icons/sprite.svg";

export const PasswordInput = () => {
  return (
    <div className={passwordStyles.passInput}>
      <input
        id="password"
        name="password"
        className={styles.input}
        placeholder="Password"
        type="password"
        min="6"
      />
      <svg className={passwordStyles.showPassword}>
        <use xlinkHref={`${sprite}#showPassword`} />
      </svg>
    </div>
  );
};
