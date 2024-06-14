import classnames from "classnames";
import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoadingSpinner, ReduxModal } from "../../shared/";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Breadcrumbs } from "../Breadcrumbs";
import styles from "./SharedLayout.module.css";

export const SharedLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { modalType } = useSelector((state) => state.modal);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header isHomePage={isHomePage} />
      </Suspense>
      <main
        className={classnames(styles.main, {
          [styles.paddingTop]: !isHomePage,
        })}
      >
        {!isHomePage && <Breadcrumbs />}
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </main>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ReduxModal key={modalType} />
      </Suspense>
    </>
  );
};
