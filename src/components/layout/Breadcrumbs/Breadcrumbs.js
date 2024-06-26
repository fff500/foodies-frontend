import { useMemo } from "react";
import classnames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { useGetRecipeQuery } from "../../../redux";
import { Container } from "../";
import styles from "./Breadcrumbs.module.css";
import Skeleton from "react-loading-skeleton";

const mapRouteName = {
  "/": "Home",
  add: "Add recipe",
  user: "Profile",
};

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((path) => path);

  const id = pathnames.filter((el) => el !== "recipe" && !mapRouteName[el]);
  const { isLoading, data: { title } = {} } = useGetRecipeQuery(id, {
    skip: !id || !location.pathname.includes("recipe"),
  });
  const renderPathNames = useMemo(() => {
    if (location.pathname.includes("user")) {
      return ["user"];
    }
    if (id[0]) {
      mapRouteName.id = title;
      return ["id"];
    }
    mapRouteName.id = undefined;
    return location.pathname
      .split("/")
      .filter((path) => path && path !== "recipe");
  }, [title, id, location]);

  return (
    <Container>
      {isLoading ? (
        <Skeleton
          count={1}
          height={20}
          style={{ marginBottom: 32, width: 300 }}
        />
      ) : (
        <nav>
          <ol className={styles.breadcrumb}>
            <li
              aria-current="page"
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
                    aria-current="page"
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
      )}
    </Container>
  );
};
