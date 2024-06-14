import styles from './ErrorMessage.module.css';

const typeError = {
  required: 'required',
  maxLength: 'maxLength',
};

const message = {
  [typeError.required]: 'This is required',
  [typeError.maxLength]: 'Max length exceeded',
};

export const ErrorMessage = ({ errors, field }) => {
  if (!errors) return null;

  const error = errors[field];
  const type = error?.type;

  return (
    error &&
    type === typeError[type] && (
      <span className={styles.errorMessage}>{message[type]}</span>
    )
  );
};
