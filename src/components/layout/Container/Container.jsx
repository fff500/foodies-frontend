import React from "react";
import classNames from "classnames";
import styles from "./Container.module.css";

export const Container = ({ wide = false, children }) => (
  <div className={classNames(styles.container, { [styles.wide]: wide })}>
    {children}
  </div>
);
