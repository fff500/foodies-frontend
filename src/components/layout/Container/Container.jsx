import React from 'react';
import classNames from 'classnames';

import styles from './Container.module.css';

const Container = ({ wide = false, children }) => (
  <div className={classNames(styles.container, { [styles.wide]: wide })}>
    {children}
  </div>
);

export default Container;
