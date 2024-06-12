import React, { useMemo } from "react";
import classnames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { useGetRecipeQuery } from "../../../redux";
import { Container } from "../";
import styles from "./Breadcrumbs.module.css";

const mapRouteName = {
  recipe: "Add recipe",
  user: "Profile",
};

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((path) => path);
  const id = pathnames.filter((el) => !mapRouteName[el]);
  const { data: { title } = {} } = useGetRecipeQuery(id, { skip: !id });
  const renderPathNames = useMemo(() => {
    if (id[0]) {
      mapRouteName.id = title;
      return ["id"];
    }
    mapRouteName.id = undefined;
    return location.pathname.split("/").filter((path) => path);
  }, [title, id, location]);

  return (
    <Container>
      <nav>
        <ol className={styles.breadcrumb}>
          <li
            className={classnames(styles.breadcrumbItem, {
              [styles.last]: renderPathNames.length === 0,
            })}
          >
            {renderPathNames.length ? <Link to="/">Home</Link> : "Home"}
          </li>
          {renderPathNames.length > 0 &&
            renderPathNames.map((value, index) => {
              const to = `/${renderPathNames.slice(0, index + 1).join("/")}`;

              return index === renderPathNames.length - 1 ? (
                <li
                  key={to}
                  className={classnames(styles.breadcrumbItem, styles.last)}
                >
                  {mapRouteName[value]}
                </li>
              ) : (
                <li key={to} className={styles.breadcrumbItem}>
                  <Link to={to}>{mapRouteName[value]}</Link>
                </li>
              );
            })}
        </ol>
      </nav>
    </Container>
  );
};
