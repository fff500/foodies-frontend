import React from "react";
import styles from "./ErrorComponent.module.css";

export const ErrorComponent = ({ message, onRetry }) => {
  const onReload = () => window.location.reload();

  return (
    <div className={styles.errorContainer}>
      <p className={styles.errorMessage}>
        Error: {message || "Something went wrong!"}
      </p>
      <button className={styles.reloadButton} onClick={onRetry || onReload}>
        Retry
      </button>
    </div>
  );
};
