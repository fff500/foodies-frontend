import classnames from "classnames";
import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
// TODO: will be fixed later
// import { Breadcrumbs } from "../Breadcrumbs";
import styles from "./SharedLayout.module.css";

export const SharedLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <Header isHomePage={isHomePage} />
      <main className={classnames({ [styles.paddingTop]: !isHomePage })}>
        <Suspense fallback={<div>Loading...</div>}>
          {/* <Breadcrumbs /> */}
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
