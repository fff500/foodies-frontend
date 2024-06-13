import styles from "./Input.module.css";

export const Input = ({ name, type, placeholder }) => {
  return (
    <input
      id={name}
      name={name}
      className={styles.input}
      placeholder={placeholder}
      type={type}
    />
  );
};
