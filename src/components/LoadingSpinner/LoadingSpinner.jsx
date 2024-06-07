import React from "react";
import styles from "./LoadingSpinner.module.css";
import classNames from "classnames";

export const LoadingSpinner = ({ className }) => (
  <div className={classNames(styles.spinner, className)} />
);
