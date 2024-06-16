import styles from "./ErrorMessage.module.css";

const errorMessages = {
  required: "This is required",
  maxLength: "Max length exceeded",
  validate: "Can't be negative",
};

export const ErrorMessage = ({ errors, field }) => {
  if (!errors || !errors[field]) return null;

  const errorType = errors[field]?.type;
  const errorMessage = errorMessages[errorType];

  return errorMessage ? (
    <span className={styles.errorMessage}>{errorMessage}</span>
  ) : null;
};
