import React from "react";
import classnames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { Container } from "../";
import styles from "./Breadcrumbs.module.css";

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathNames = location.pathname.split("/").filter((path) => path);

  return (
    <Container wide>
      <nav>
        <ol className={styles.breadcrumb}>
          <li
            className={classnames(styles.breadcrumbItem, {
              [styles.last]: pathNames.length === 0,
            })}
          >
            {pathNames.length ? <Link to="/">Home</Link> : "Home"}
          </li>
          {pathNames.length > 0 &&
            pathNames.map((value, index) => {
              const to = `/${pathNames.slice(0, index + 1).join("/")}`;

              return index === pathNames.length - 1 ? (
                <li
                  key={to}
                  className={classnames(styles.breadcrumbItem, styles.last)}
                  aria-current="page"
                >
                  {location.state[value] || value}
                </li>
              ) : (
                <li key={to} className={styles.breadcrumbItem}>
                  <Link to={to}>{location.state[value] || value}</Link>
                </li>
              );
            })}
        </ol>
      </nav>
    </Container>
  );
};
