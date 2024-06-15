import { useMemo } from "react";
import classnames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { useGetRecipeQuery } from "../../../redux";
import { Container } from "../";
import styles from "./Breadcrumbs.module.css";

const mapRouteName = {
  "/": "Home",
  add: "Add recipe",
  user: "Profile",
};

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((path) => path);
  const id = pathnames.filter((el) => el !== "recipe" && !mapRouteName[el]);
  const { data: { title } = {} } = useGetRecipeQuery(id, { skip: !id });
  let renderPathNames = useMemo(() => {
    if (id[0]) {
      mapRouteName.id = title;
      return ["id"];
    }
    mapRouteName.id = undefined;
    return location.pathname
      .split("/")
      .filter((path) => path && path !== "recipe");
  }, [title, id, location]);

  if (location.pathname.includes("user")) {
    renderPathNames = ["user"];
  }
  return (
    <Container>
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
    </Container>
  );
};
