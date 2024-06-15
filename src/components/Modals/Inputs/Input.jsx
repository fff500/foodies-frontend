import styles from "./Input.module.css";

export const Input = ({ register, errors, config }) => {
  return (
    <div className={styles.container}>
      <input
        id={config.name}
        className={styles.input}
        placeholder={config.placeholder}
        type={config.type}
        {...register(`${config.name}`)}
      />
      <p className={styles.errorMsg}>
        {errors[config.name] && <span>{errors[config.name].message}</span>}
      </p>
    </div>
  );
};
