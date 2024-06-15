import { useState } from "react";
import sprite from "../../../assets/icons/sprite.svg";
import { Button } from "../../shared";
import styles from "./Input.module.css";
import passwordStyles from "./PasswordInput.module.css";

export const PasswordInput = ({ register, errors, config }) => {
  const [type, setType] = useState(false);
  return (
    <div className={styles.container}>
      <div className={passwordStyles.passInput}>
        <input
          id={config.name}
          className={styles.input}
          placeholder={config.placeholder}
          type={type ? "text" : "password"}
          {...register(`${config.name}`)}
        />
        <Button onClick={() => setType(!type)} type="button">
          <svg className={passwordStyles.showPassword}>
            <use
              xlinkHref={`${sprite}#${type ? "hidePassword" : "showPassword"}`}
            />
          </svg>
        </Button>
      </div>
      <p className={styles.errorMsg}>
        {errors[config.name] && <span>{errors[config.name].message}</span>}
      </p>
    </div>
  );
};
