import classnames from "classnames";
import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Breadcrumbs } from "../Breadcrumbs";
import styles from "./SharedLayout.module.css";

export const SharedLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <Header isHomePage={isHomePage} />
      <main
        className={classnames(styles.main, {
          [styles.paddingTop]: !isHomePage,
        })}
      >
        {!isHomePage && <Breadcrumbs />}
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
